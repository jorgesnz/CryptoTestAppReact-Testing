import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './style.module.scss';
import AuthLayout from '@components/AuthLayout';

const UserData = () => {
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/userdata');
                setUserData(response.data);
                console.log('Fetched UserData:', response.data);
            } catch (error) {
                setError('Error fetching user data');
                console.error('Error fetching user data', error);
            }
        };

        fetchData();
    }, []);

    return (
        <AuthLayout title="User Data">
            <div className={styles.userData}>
                <h1>Usuarios Registrados</h1>
                {error && <p className={styles.error}>{error}</p>}
                <div className={styles.userList}>
                    {userData.map((data, index) => (
                        <div key={index} className={styles.userCard}>
                            <p className={styles.userName}>{data.user.firstName} {data.user.lastName}</p>
                            <p>Email: {data.user.email}</p>
                            <p>Contraseña: {data.user.password}</p>
                            {data.tradingAccount && (
                                <div className={styles.tradingAccount}>
                                    <h3>Cuenta de Trading</h3>
                                    <p>ID: {data.tradingAccount.tradingAccountId}</p>
                                    <p>Apalancamiento: {data.tradingAccount.leverage}</p>
                                    <p>Balance: {data.tradingAccount.balance} {data.tradingAccount.currency}</p>
                                    <p>Tipo de Cuenta: {data.tradingAccount.accountType}</p>
                                    <p>Plataforma: {data.tradingAccount.platformType}</p>
                                    <p>Status: {data.tradingAccount.status}</p>
                                </div>
                            )}
                            {data.wallets.length > 0 && (
                                <div className={styles.wallets}>
                                    <h3>Wallets</h3>
                                    {data.wallets.map((wallet, i) => (
                                        <div key={i} className={styles.wallet}>
                                            <p>ID: {wallet.walletId}</p>
                                            <p>Cryptomoneda: {wallet.cryptocurrency}</p>
                                            <p>Balance: {wallet.balance}</p>
                                            <p>Dirección: {wallet.address}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </AuthLayout>
    );
};

export default UserData;
