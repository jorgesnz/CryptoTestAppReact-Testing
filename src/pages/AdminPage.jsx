import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './UserList';
import UserDetail from './UserDetail';
import './AdminPage.scss';

const AdminPage = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('adminToken');
                if (!token) {
                    throw new Error('No token found');
                }
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/admin/users`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    const filteredUsers = users.filter(user => 
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="admin-page">
            <div className="header">
                <h1>Admin Dashboard</h1>
                <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="content">
                <div className="user-list">
                    <UserList users={filteredUsers} onSelectUser={setSelectedUser} />
                </div>
                <div className="user-detail">
                    {selectedUser ? (
                        <UserDetail userId={selectedUser} />
                    ) : (
                        <div className="no-user-selected">Select a user to view details</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
