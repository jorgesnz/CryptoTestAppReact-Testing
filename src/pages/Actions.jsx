// components
import AppLayout from '@components/AppLayout';
import AppGrid from '@components/AppGrid';
import PageHeader from '@components/PageHeader';
import Deposit from '@widgets/Deposit';
import Withdraw from '@widgets/Withdraw';
import Market from '@widgets/Market';
import Stacking from '@widgets/Stacking';
import Exchange from '@widgets/Exchange';
import AMLCheck from '@widgets/AMLCheck';



const widgets = {
    deposit: <Deposit/>,
    withdraw: <Withdraw/>,
    market: <Market/>,
    stacking: <Stacking/>,
    exchange: <Exchange/>,
    aml: <AMLCheck/>,
}

const Actions = () => {
    return (
        <AppLayout>
            <PageHeader title="Depositar y Retirar"/>
            <AppGrid id="actions" widgets={widgets}/>
        </AppLayout>
    )
}

export default Actions