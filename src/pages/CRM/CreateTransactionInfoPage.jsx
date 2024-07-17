import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreateTransactionInfoPage.scss';

const CreateTransactionInfoPage = () => {
    const { id } = useParams();
    const [transactions, setTransactions] = useState([]);
    const [selectedTransaction, setSelectedTransaction] = useState('');
    const [info, setInfo] = useState('');
    const [status, setStatus] = useState('En revision');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/transactions/${id}`)
            .then(response => setTransactions(response.data))
            .catch(error => console.error('Error fetching transactions:', error));
    }, [id]);

    const handleCreateTransactionInfo = () => {
        if (!selectedTransaction || !info || !status) {
            alert('Por favor completa todos los campos');
            return;
        }

        axios.post(`${process.env.REACT_APP_SERVER_URL}/api/transaction-info`, {
            transactionId: selectedTransaction,
            info,
            status
        })
            .then(response => {
                console.log('Información de transacción creada:', response.data);
                alert('Información de transacción creada');
                navigate(`/crm/user/${id}`);
            })
            .catch(error => {
                console.error('Error creating transaction info:', error);
                alert('Error al crear información de transacción');
            });
    };

    return (
        <div className="create-transaction-info-container">
            <h1>Crear Información de Transacción</h1>
            <p>Selecciona una Transacción:</p>
            <select onChange={(e) => setSelectedTransaction(e.target.value)} value={selectedTransaction}>
                <option value="" disabled>Seleccionar una transacción</option>
                {transactions.map(transaction => (
                    <option key={transaction._id} value={transaction._id}>
                        {transaction.type} - {transaction.amount} {transaction.currencyLabel}
                    </option>
                ))}
            </select>
            <textarea
                placeholder="Información adicional"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
            />
            <select onChange={(e) => setStatus(e.target.value)} value={status}>
                <option value="En revision">En revisión</option>
                <option value="Retenido">Retenido</option>
                <option value="Aprobado">Aprobado</option>
            </select>
            <div className="buttons">
                <button className="confirm" onClick={handleCreateTransactionInfo}>Confirmar</button>
                <button className="back" onClick={() => navigate(`/crm/user/${id}`)}>Volver</button>
            </div>
        </div>
    );
};

export default CreateTransactionInfoPage;
