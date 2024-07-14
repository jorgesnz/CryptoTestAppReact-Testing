// utils
import {lazy} from 'react';

// components
import AppLayout from '@components/AppLayout';
import AppGrid from '@components/AppGrid';
import PageHeader from '@components/PageHeader';
import CategorizedCollections from '@widgets/CategorizedCollections';
import TopMover from '@widgets/TopMover';
import TopCollection from '@widgets/TopCollection';
import PopularCollections from '@widgets/PopularCollections';
import TopItem from '@widgets/TopItem';
import ListModal from '@components/ListModal';
const NFTPayment = lazy(() => import('@components/NFTPayment'));
const NFTPaymentSuccess = lazy(() => import('@components/NFTPaymentSuccess'));

const widgets = {
    categories: <CategorizedCollections/>,
    mover: <TopMover/>,
    collection: <TopCollection/>,
    popular: <PopularCollections/>,
    item: <TopItem/>
}

const Collections = () => {
    return (
        <AppLayout>
            <PageHeader title="Colecciones NFT"/>
            <AppGrid id="collections" widgets={widgets}/>
            <ListModal/>
            <NFTPayment/>
            <NFTPaymentSuccess/>
        </AppLayout>
    )
}

export default Collections