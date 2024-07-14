// utils
import { lazy, useState, useEffect } from 'react';
import axios from 'axios';

// components
import AppLayout from '@components/AppLayout';
import AppGrid from '@components/AppGrid';
import PageHeader from '@components/PageHeader';
import Explore from '@widgets/ExploreNFT';
import Profile from '@widgets/Profile';
import PopularItems from '@widgets/PopularItems';
import ListModal from '@components/ListModal';

// data placeholder
import authorData from '@db/author';

const NFTPayment = lazy(() => import('@components/NFTPayment'));
const NFTPaymentSuccess = lazy(() => import('@components/NFTPaymentSuccess'));

const NFT = () => {
    const [author, setAuthor] = useState(authorData);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = localStorage.getItem('userId');
                if (!userId) {
                    console.error('No userId found in localStorage');
                    return;
                }
                const response = await axios.get(`http://localhost:5000/api/userdata/current-user/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                const user = response.data.user;
                setAuthor(prevAuthor => ({
                    ...prevAuthor,
                    name: `${user.firstName} ${user.lastName}`
                }));
            } catch (error) {
                console.error('Error fetching user data', error);
            }
        };

        fetchUserData();
    }, []);

    const widgets = {
        explore: <Explore />,
        profile: author && <Profile author={author} />, // Solo renderizamos Profile si author no es null
        popular: <PopularItems />
    }

    return (
        <AppLayout>
            <PageHeader title="NFT" />
            <AppGrid id="nft" widgets={widgets} />
            <ListModal />
            <NFTPayment />
            <NFTPaymentSuccess />
        </AppLayout>
    )
}

export default NFT;
