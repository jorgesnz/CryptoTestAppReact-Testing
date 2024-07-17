import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AccessDenied from './AccessDenied';
import './CRMPage.scss';

const CRMPage = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [userRole, setUserRole] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userId'); // Asumiendo que el ID del usuario está almacenado en localStorage
    // Fetch user role
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/userdata/UserRole/${userId}/verify-role`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
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
    if (userRole === 'agent' || userRole === 'admin') {
      // Fetch users from the database
      axios.get(`${process.env.REACT_APP_SERVER_URL}/api/crm/users`)
        .then(response => setUsers(response.data))
        .catch(error => console.error('Error fetching users:', error));
    }
  }, [userRole]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSelectUser = (userId) => {
    setSelectedUsers(prevSelectedUsers => {
      if (prevSelectedUsers.includes(userId)) {
        return prevSelectedUsers.filter(id => id !== userId);
      } else {
        return [...prevSelectedUsers, userId];
      }
    });
  };

  const handleDeleteSelected = async () => {
    if (selectedUsers.length === 0) return;

    const confirmDelete = window.confirm('Estas seguro de eliminar los usuarios seleccionados?');
    if (confirmDelete) {
      try {
        await Promise.all(selectedUsers.map(userId => axios.delete(`${process.env.REACT_APP_SERVER_URL}/api/crm/user/${userId}`)));
        setUsers(users.filter(user => !selectedUsers.includes(user._id)));
        setSelectedUsers([]);
        alert('Usuarios seleccionados eliminados exitosamente');
      } catch (error) {
        console.error('Error eliminando usuarios', error);
        alert('Error al eliminar los usuarios');
      }
    }
  };

  const filteredUsers = users.filter(user => 
    `${user.firstName} ${user.lastName}`.toLowerCase().includes(search.toLowerCase()) || 
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (userRole !== 'agent' && userRole !== 'admin') {
    return <AccessDenied />;
  }

  return (
    <div className="crm-container">
      <h1>CRM - CryptoTest App</h1>
      <button className="user-mode-button" onClick={() => navigate('/dashboard')}>Modo Usuario</button>
      <div className="search-delete-container">
        <input 
          type="text" 
          placeholder="Búscar usuarios..." 
          value={search} 
          onChange={handleSearch} 
          className="search-bar"
        />
        {selectedUsers.length > 0 && (
          <button className="delete-selected-button" onClick={handleDeleteSelected}>
            Borrar Selección
          </button>
        )}
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>Selec.</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user._id}>
              <td>
                <input 
                  type="checkbox" 
                  checked={selectedUsers.includes(user._id)} 
                  onChange={() => handleSelectUser(user._id)} 
                />
              </td>
              <td onClick={() => navigate(`/crm/user/${user._id}`)}>
                {user.firstName} {user.lastName}
              </td>
              <td onClick={() => navigate(`/crm/user/${user._id}`)}>
                {user.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};  

export default CRMPage;
