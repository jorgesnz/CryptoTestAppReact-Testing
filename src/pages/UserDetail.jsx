import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserDetail.scss';

const UserDetail = ({ userId }) => {
    const [user, setUser] = useState(null);
    const [wallets, setWallets] = useState([]);
    const [deposit, setDeposit] = useState({ amount: 0, walletId: '' });
    const [withdrawal, setWithdrawal] = useState({ amount: 0, walletId: '' });
    const [role, setRole] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('adminToken');
                const response = await axios.get(`http://localhost:5000/api/admin/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(response.data);
                setRole(response.data.role);

                // Fetch wallets separately
                const walletsResponse = await axios.get(`http://localhost:5000/api/admin/users/${userId}/wallets`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setWallets(walletsResponse.data);
            } catch (error) {
                console.error('Error fetching user or wallets:', error);
                alert('Error fetching user or wallets');
            }
        };
        fetchUser();
    }, [userId]);

    const handleRoleChange = async () => {
        try {
            const token = localStorage.getItem('adminToken');
            const response = await axios.put(`http://localhost:5000/api/admin/users/${userId}`, { role }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUser(response.data);
            alert('Role updated');
        } catch (error) {
            console.error('Error updating role:', error);
        }
    };

    const handleDeposit = async () => {
        if (!deposit.walletId) {
            alert('Please select a wallet for the deposit.');
            return;
        }
        try {
            const token = localStorage.getItem('adminToken');
            await axios.post(`http://localhost:5000/api/admin/users/${userId}/deposit`, deposit, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            alert('Deposit successful');
        } catch (error) {
            console.error('Error making deposit:', error);
        }
    };

    const handleWithdrawal = async () => {
        if (!withdrawal.walletId) {
            alert('Please select a wallet for the withdrawal.');
            return;
        }
        try {
            const token = localStorage.getItem('adminToken');
            await axios.post(`http://localhost:5000/api/admin/users/${userId}/withdrawal`, withdrawal, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            alert('Withdrawal successful');
        } catch (error) {
            console.error('Error making withdrawal:', error);
        }
    };

    if (!user) {
        return <div className="loading">Loading user data...</div>;
    }

    return (
        <div className="user-detail">
            <h2>{user.firstName} {user.lastName}</h2>
            <p>Email: {user.email}</p>
            <p>Balance: {wallets && wallets.map(wallet => (
                <span key={wallet._id}>{wallet.balance} {wallet.cryptocurrency}</span>
            ))}</p>
            <p>Role: {user.role}</p>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="user">User</option>
                <option value="agent">Agent</option>
                <option value="admin">Admin</option>
            </select>
            <button onClick={handleRoleChange}>Update Role</button>

            <h3>Make a Deposit</h3>
            <select value={deposit.walletId} onChange={(e) => setDeposit({ ...deposit, walletId: e.target.value })}>
                <option value="">Select Wallet</option>
                {wallets && wallets.map(wallet => (
                    <option key={wallet._id} value={wallet._id}>
                        {wallet.cryptocurrency} - {wallet.address}
                    </option>
                ))}
            </select>
            <input
                type="number"
                placeholder="Amount"
                value={deposit.amount}
                onChange={(e) => setDeposit({ ...deposit, amount: e.target.value })}
            />
            <button onClick={handleDeposit}>Add Deposit</button>

            <h3>Make a Withdrawal</h3>
            <select value={withdrawal.walletId} onChange={(e) => setWithdrawal({ ...withdrawal, walletId: e.target.value })}>
                <option value="">Select Wallet</option>
                {wallets && wallets.map(wallet => (
                    <option key={wallet._id} value={wallet._id}>
                        {wallet.cryptocurrency} - {wallet.address}
                    </option>
                ))}
            </select>
            <input
                type="number"
                placeholder="Amount"
                value={withdrawal.amount}
                onChange={(e) => setWithdrawal({ ...withdrawal, amount: e.target.value })}
            />
            <button onClick={handleWithdrawal}>Add Withdrawal</button>
        </div>
    );
};

export default UserDetail;
