import React, { useState, useEffect } from 'react';
import axios from 'axios';

// components
import AppLayout from '@components/AppLayout';
import AppGrid from '@components/AppGrid';
import PageHeader from '@components/PageHeader';
import WalletOverview from '@widgets/WalletOverview';
import Deposit from '@widgets/Deposit';
import Trade from '@widgets/Trade';
import Referral from '@widgets/Referral';
import History from '@widgets/History';
import Banner from '@widgets/Banner';

const Wallet = () => {
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
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/userdata/dashboard/${userId}`);
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
        wallet: <WalletOverview userData={userData} tradingData={tradingData} wallets={wallets} />,
        deposit: <Deposit />,
        trade: <Trade />,
        history: <History userId={userId} />,
        referral: <Referral />,
        banner: <Banner />
    };

    return (
        <AppLayout>
            <PageHeader title="Wallet" />
            <AppGrid id="wallet" widgets={widgets} />
        </AppLayout>
    );
};

export default Wallet;
