import {ReactComponent as DepositIcon} from '@assets/icons/deposit.svg';
import {ReactComponent as CryptoIcon} from '@assets/icons/crypto.svg';
import {ReactComponent as WithdrawIcon} from '@assets/icons/withdraw.svg';
import {ReactComponent as ExchangeIcon} from '@assets/icons/exchange.svg';
import {ReactComponent as StakingIcon} from '@assets/icons/staking.svg';
import {ReactComponent as NFTIcon} from '@assets/icons/nft.svg';
import {ReactComponent as AMLIcon} from '@assets/icons/aml.svg';
import {ReactComponent as CupIcon} from '@assets/icons/cup.svg';
import {ReactComponent as InviteIcon} from '@assets/icons/invite.svg';
import {ReactComponent as SupportIcon} from '@assets/icons/support.svg';

const ACTIONS = [
    {
        title: 'Depositar',
        icon: <DepositIcon />,
        primary: true,
    },
    {
        title: 'Comprar Crypto',
        icon: <CryptoIcon />,
        primary: true,
    },
    {
        title: 'Retirar',
        icon: <WithdrawIcon />,
    },
    {
        title: 'Convertir',
        icon: <ExchangeIcon />,
    },
    {
        title: 'Stacking',
        icon: <StakingIcon />,
    },
    {
        title: 'NFT',
        icon: <NFTIcon />,
    },
    {
        title: 'AML',
        icon: <AMLIcon />,
    },
    {
        title: 'Lideres',
        icon: <CupIcon />,
    },
    {
        title: 'Invitar',
        icon: <InviteIcon />,
    },
    {
        title: 'Soporte',
        icon: <SupportIcon />,
    }
];

export default ACTIONS