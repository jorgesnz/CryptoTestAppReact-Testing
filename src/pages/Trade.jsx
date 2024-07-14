import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppLayout from '@components/AppLayout';
import AppGrid from '@components/AppGrid';
import PageHeader from '@components/PageHeader';
import BuyCrypto from '@widgets/BuyCrypto';
import WalletOverview from '@widgets/WalletOverview';
import History from '@widgets/History';
import Market from '@widgets/Market';
import TopCrypto from '@widgets/TopCrypto';

const Trade = () => {
    const [userData, setUserData] = useState(null);
    const [tradingData, setTradingData] = useState(null);
    const [wallets, setWallets] = useState([]);
    const [userId, setUserId] = useState(localStorage.getItem('userId'));

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!userId) {
                    console.error('No userId found in localStorage');
                    return;
                }
                const response = await axios.get(`http://localhost:5000/api/userdata/dashboard/${userId}`);
                setUserData(response.data.user);
                setTradingData(response.data.tradingAccount);
                setWallets(response.data.wallets);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, [userId]);

    const widgets = {
        market: <Market />,
        buy: <BuyCrypto variant="form" />,
        wallet: <WalletOverview userData={userData} tradingData={tradingData} wallets={wallets} />,
        top: <TopCrypto wallets={wallets} />,
        history: <History userId={userId} />
    };

    return (
        <AppLayout>
            <PageHeader title="Trade" />
            <AppGrid id="trade" widgets={widgets} />
        </AppLayout>
    );
};

export default Trade;
