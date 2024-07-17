import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddDepositPage.scss';

const AddDepositPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [amount, setAmount] = useState('');
  const [selectedWallet, setSelectedWallet] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/crm/user/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching user details:', error));
  }, [id]);

  const handleConfirmDeposit = () => {
    if (!selectedWallet || !amount) {
      alert('Por favor selecciona una Wallet y escribe el monto');
      return;
    }

    axios.post(`${process.env.REACT_APP_SERVER_URL}/api/crm/user/${id}/deposit`, {
      walletId: selectedWallet,
      amount: parseFloat(amount)
    })
    .then(response => {
      console.log('Depósito Exitoso:', response.data);
      alert('Depósito exitoso');
      navigate(`/crm/user/${id}`);
    })
    .catch(error => {
      console.error('Error processing deposit:', error);
      alert('Error al procesar el depósito');
    });
  };

  if (!user) return <div className="loading">Cargando...</div>;

  return (
    <div className="add-deposit-container">
      <h1>Añadir Depósito a {user.firstName} {user.lastName}</h1>
      <p>Selecciona la Wallet:</p>
      <select onChange={(e) => setSelectedWallet(e.target.value)} value={selectedWallet}>
        <option value="" disabled>Seleccionar una wallet</option>
        {user.wallets.map(wallet => (
          <option key={wallet._id} value={wallet._id}>
            {wallet.cryptocurrency} - Balance: {wallet.balance}
          </option>
        ))}
      </select>
      <input 
        type="number" 
        placeholder="Cantidad" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
      />
      <div className="buttons">
        <button className="confirm" onClick={handleConfirmDeposit}>Confirmar Depósito</button>
        <button className="back" onClick={() => navigate(-1)}>Volver</button>
      </div>
    </div>
  );
};

export default AddDepositPage;
