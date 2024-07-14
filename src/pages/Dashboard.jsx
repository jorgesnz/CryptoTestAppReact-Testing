import React, { useState, useEffect } from 'react';
import axios from '../utils/axiosConfig'; // Asegúrate de que la ruta sea correcta

// components
import AppLayout from '@components/AppLayout';
import AppGrid from '@components/AppGrid';
import PageHeader from '@components/PageHeader';
import WalletOverview from '@widgets/WalletOverview';
import BuyCrypto from '@widgets/BuyCrypto';
import LeaderBoard from '@widgets/LeaderBoard';
import QuickActions from '@widgets/QuickActions';
import Notifications from '@widgets/Notifications';

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const [tradingData, setTradingData] = useState(null);
    const [wallets, setWallets] = useState([]);
    const [notifications, setNotifications] = useState([]);
    const [userId, setUserId] = useState(localStorage.getItem('userId'));

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!userId) {
                    console.error('No userId found in localStorage');
                    return;
                }
                const userResponse = await axios.get(`/api/userdata/dashboard/${userId}`);
                setUserData(userResponse.data.user);
                setTradingData(userResponse.data.tradingAccount);
                setWallets(userResponse.data.wallets);

                const notificationsResponse = await axios.get(`/api/notifications/user/${userId}`);
                setNotifications(notificationsResponse.data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, [userId]);

    const handleNotificationClick = (notificationId) => {
        // Actualizar el estado de las notificaciones después de marcar una como leída
        setNotifications(prevNotifications =>
            prevNotifications.map(notification =>
                notification._id === notificationId ? { ...notification, read: true } : notification
            )
        );
    };

    const widgets = {
        wallet: <WalletOverview userData={userData} tradingData={tradingData} wallets={wallets} />,
        buy: <BuyCrypto variant="overview" />,
        leaders: <LeaderBoard />,
        actions: <QuickActions />,
        notifications: <Notifications userId={userId} notifications={notifications} onNotificationClick={handleNotificationClick} />
    };

    return (
        <AppLayout>
            <PageHeader title="Panel" variant="dashboard" />
            <AppGrid id="dashboard" widgets={widgets} />
        </AppLayout>
    );
};

export default Dashboard;
