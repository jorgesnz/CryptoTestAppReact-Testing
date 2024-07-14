import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import './UserDetailPage.scss';
import AccessDenied from './AccessDenied';

const UserDetailPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [userRole, setUserRole] = useState('');
  const [newRole, setNewRole] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    axios.get(`http://localhost:5000/api/userdata/UserRole/${userId}/verify-role`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then(response => {
        setUserRole(response.data.role);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user role:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/crm/user/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching user details:', error));

    axios.get(`http://localhost:5000/api/notifications/user/${id}`)
      .then(response => setNotifications(response.data))
      .catch(error => console.error('Error fetching notifications:', error));

    axios.get(`http://localhost:5000/api/transactions/${id}`)
      .then(response => setTransactions(response.data))
      .catch(error => console.error('Error fetching transactions:', error));
  }, [id]);

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm('¿Estas seguro que quieres eliminar esta cuenta?');
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/api/crm/user/${id}`);
        alert('Cuenta borrada con éxito');
        navigate('/crm');
      } catch (error) {
        console.error('Error deleting account', error);
        alert('Error al borrar la cuenta');
      }
    }
  };

  const handleDeleteTransaction = async (transactionId) => {
    try {
      await axios.delete(`http://localhost:5000/api/transactions/${transactionId}`);
      setTransactions(transactions.filter(transaction => transaction._id !== transactionId));
      setShowModal(false);
    } catch (error) {
      console.error('Error deleting transaction', error);
      alert('Error al borrar la transacción');
    }
  };

  const openModal = (transaction) => {
    setSelectedTransaction(transaction);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedTransaction(null);
    setShowModal(false);
  };

  const openRoleModal = () => {
    setShowRoleModal(true);
  };

  const closeRoleModal = () => {
    setShowRoleModal(false);
    setNewRole('');
  };

  const handleRoleChange = async () => {
    try {
      await axios.put(`http://localhost:5000/api/user/role/${id}`, { role: newRole }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      setUser({ ...user, role: newRole });
      closeRoleModal();
      alert('Rol cambiado con exito');
    } catch (error) {
      console.error('Error updating role', error);
      alert('Error al cambiar rol');
    }
  };

  if (loading) return <div>Loading...</div>;

  if (userRole !== 'agent' && userRole !== 'admin') {
    return <AccessDenied />;
  }

  if (!user) return <div>Loading user details...</div>;

  return (
    <div className="user-detail-container">
      <h1>{user.firstName} {user.lastName}</h1>
      <p>Email: {user.email}</p>
      <div className="buttons">
        <button className="btn add-deposit" onClick={() => navigate(`/crm/user/${id}/add-deposit`)}>Añadir Depósito</button>
        <button className="btn create-notification" onClick={() => navigate(`/crm/user/${id}/create-notification`)}>Crear Notificación</button>
        <button className="btn delete-account" onClick={handleDeleteAccount}>Borrar Cuenta</button>
        {userRole === 'admin' && (
          <button className="btn change-role" onClick={openRoleModal}>Cambiar Rol</button>
        )}
        <button className="btn back" onClick={() => navigate(-1)}>Volver</button>
      </div>
      <h2>Wallets</h2>
      <ul className="wallets-list">
        {user.wallets.map(wallet => (
          <li key={wallet._id} className="wallet-item">
            <span className="wallet-cryptocurrency">{wallet.cryptocurrency}</span>: <span className="wallet-balance">{wallet.balance}</span> (Address: <span className="wallet-address">{wallet.address}</span>)
          </li>
        ))}
      </ul>
      <h2>Notificaciones</h2>
      <ul className="notification-list">
        {notifications.map(notification => (
          <li key={notification._id} className={`notification-item ${notification.read ? 'read' : 'unread'}`}>
            <div className="notification-content" onClick={() => navigate(`/crm/notification/${notification._id}/edit`)}>
              <h3>{notification.title}</h3>
              <p>{notification.text}</p>
              <p><small>{new Date(notification.date).toLocaleString()}</small></p>
            </div>
            <FaEdit className="icon edit-icon" />
          </li>
        ))}
      </ul>
      <h2>Transacciones</h2>
      <ul className="transaction-list">
        {transactions.map(transaction => (
          <li key={transaction._id} className="transaction-item">
            <strong>{transaction.type}:</strong> {transaction.amount} {transaction.currencyLabel}
            <p><small>{new Date(transaction.date).toLocaleString()}</small></p>
            <FaTrashAlt className="icon delete-icon" onClick={() => openModal(transaction)} />
          </li>
        ))}
      </ul>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3><strong>Borrar Transacción</strong></h3>
            <p>¿Estás seguro de eliminar esta transacción del historial del usuario?</p>
            <p><strong>{selectedTransaction.type}</strong>: {selectedTransaction.amount} {selectedTransaction.currencyLabel}</p>
            <div className="modal-buttons">
              <button className="btn" onClick={() => handleDeleteTransaction(selectedTransaction._id)}>Aceptar</button>
              <button className="btn" onClick={closeModal}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
      {showRoleModal && (
        <div className="modal">
          <div className="modal-content">
            <h3><strong>Cambiar Rol</strong></h3>
            <p>Selecciona el nuevo rol para el usuario:</p>
            <select value={newRole} onChange={(e) => setNewRole(e.target.value)}>
              <option value="">Selecciona un rol</option>
              <option value="user">User</option>
              <option value="agent">Agent</option>
              <option value="admin">Admin</option>
            </select>
            <div className="modal-buttons">
              <button className="btn" onClick={handleRoleChange}>Aceptar</button>
              <button className="btn" onClick={closeRoleModal}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetailPage;
