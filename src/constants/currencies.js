import btc from '@assets/crypto/btc.svg';
import busd from '@assets/crypto/busd.svg';
import eth from '@assets/crypto/eth.svg';
import xrp from '@assets/crypto/xrp.svg';
import sol from 'assets/crypto/sol.svg';
import usdt from '@assets/crypto/usdt.svg';
import ada from '@assets/crypto/ada.svg';
import xph from '@assets/crypto/xph.svg';
import matic from '@assets/crypto/matic.svg';
import link from '@assets/crypto/link.svg';
import doge from '@assets/crypto/doge.svg';
import tezos from '@assets/crypto/tezos.svg';
import okb from '@assets/crypto/okb.svg';
import kadena from '@assets/crypto/kadena.svg';
import orchid from '@assets/crypto/orchid.svg';
import dollar from '@assets/icons/dollar.svg';
import euro from '@assets/icons/euro.svg';
import pound from '@assets/icons/pound.svg';

const CURRENCIES = [
    { value: 'usd', label: 'USD', icon: dollar, rate: 1 },
    { value: 'eur', label: 'EUR', icon: euro, rate: 0.85 },
    { value: 'gbp', label: 'GBP', icon: pound, rate: 0.75 },
    { value: 'aud', label: 'AUD', icon: dollar, rate: 1.3 },
    { value: 'cad', label: 'CAD', icon: dollar, rate: 1.25 },
];

const CRYPTO_CURRENCIES = [
    {
        value: 'btc',
        label: 'BTC',
        name: 'Bitcoin',
        icon: btc,
        usd: 56548.78,
        exchange: {
            usd: 56548.78,
            eur: 54433.99,
            gbp: 44903.59,
            aud: 30374.620,
            cad: 28304.48,
        },
        change: 2.68,
        isFavorite: true,
        isTrending: false,
    },
    {
        value: 'busd',
        label: 'BUSD',
        name: 'Binance',
        icon: busd,
        usd: 1.00,
        exchange: {
            usd: 1.00,
        },
        change: 0.18,
        isFavorite: false,
        isTrending: true,
    },
    {
        value: 'eth',
        label: 'ETH',
        name: 'Ethereum',
        icon: eth,
        usd: 1565.71,
        exchange: {
            usd: 1565.71,
        },
        change: -4.03,
        isFavorite: false,
        isTrending: false,
    },
    {
        value: 'xrp',
        label: 'XRP',
        name: 'Ripple',
        icon: xrp,
        usd: 0.39,
        exchange: {
            usd: 0.39,
        },
        change: 0.05,
        isFavorite: true,
        isTrending: false,
    },
    {
        value: 'sol',
        label: 'SOL',
        name: 'Solana',
        icon: sol,
        usd: 23.17,
        exchange: {
            usd: 23.17,
        },
        change: -7.14,
        isFavorite: true,
        isTrending: true,
    },
    {
        value: 'usdt',
        label: 'USDT',
        name: 'Tether',
        icon: usdt,
        usd: 1.00,
        exchange: {
            usd: 1.00,
        },
        change: 5.09,
        isFavorite: false,
        isTrending: true,
    },
    {
        value: 'ada',
        label: 'ADA',
        name: 'Cardano',
        icon: ada,
        usd: 0.35,
        exchange: {
            usd: 0.35,
        },
        change: 1.17,
        isFavorite: true,
        isTrending: true,
    },
    {
        value: 'xph',
        label: 'XPH',
        name: 'Fantom',
        icon: xph,
        usd: 0.020018,
        exchange: {
            usd: 0.020018,
        },
        change: -0.58,
        isFavorite: false,
        isTrending: false,
    },
    {
        value: 'matic',
        label: 'MATIC',
        name: 'Polygon',
        icon: matic,
        usd: 1.0482,
        exchange: {
            usd: 1.0482,
        },
        change: 3.92,
        isFavorite: true,
        isTrending: true,
    },
    {
        value: 'Bitcoin',
        label: 'BTC',
        name: 'Bitcoin',
        icon: btc,
        usd: 56548.78,
        exchange: {
            usd: 56548.78,
            eur: 54433.99,
            gbp: 44903.59,
            aud: 30374.620,
            cad: 28304.48,
        },
        change: 2.68,
        isFavorite: true,
        isTrending: false,
    },
    {
        value: 'link',
        label: 'LINK',
        name: '1Chainlink',
        icon: link,
        usd: 6.88,
        exchange: {
            usd: 6.88,
        },
        change: -6.11,
        isFavorite: true,
        isTrending: true,
    },
    {
        value: 'Ethereum',
        label: 'ETH',
        name: 'Ethereum',
        icon: eth,
        usd: 1565.71,
        exchange: {
            usd: 1565.71,
        },
        change: -4.03,
        isFavorite: false,
        isTrending: false,
    },
    {
        value: 'doge',
        label: 'DOGE',
        name: 'Dogecoin',
        icon: doge,
        usd: 0.20,
        exchange: {
            usd: 0.20,
        },
        change: -2.04,
        isFavorite: false,
        isTrending: false,
    },
    {
        value: 'tezos',
        label: 'XTZ',
        name: 'Tezos',
        icon: tezos,
        usd: 1.99,
        exchange: {
            usd: 1.99,
        },
        change: 5.19,
        isFavorite: false,
        isTrending: true,
    },
    {
        value: 'okb',
        label: 'OKB',
        name: 'OKB',
        icon: okb,
        usd: 3.99,
        exchange: {
            usd: 3.99,
        },
        change: 0.25,
        isFavorite: true,
        isTrending: true,
    },
    {
        value: 'Solana',
        label: 'SOL',
        name: 'Solana',
        icon: sol,
        usd: 23.17,
        exchange: {
            usd: 23.17,
        },
        change: -7.14,
        isFavorite: true,
        isTrending: true,
    },
    {
        value: 'kadena',
        label: 'KDA',
        name: 'Kadena',
        icon: kadena,
        usd: 0.99,
        exchange: {
            usd: 0.99,
        },
        change: -0.13,
        isFavorite: false,
        isTrending: false,
    },
    {
        value: 'orchid',
        label: 'OXT',
        name: 'Orchid',
        icon: orchid,
        usd: 1.99,
        exchange: {
            usd: 1.99,
        },
        change: 7.08,
        isFavorite: true,
        isTrending: true,
    },
    {
        value: 'eur',
        label: 'EUR',
        name: 'Euro',
        icon: euro,
        usd: 1.00,
        exchange: {
            usd: 1.00,
        },
        change: 5.09,
        isFavorite: false,
        isTrending: false,
    },
];

const MERCHANTS = [
    { value: 'creditDebitCard', label: 'Tarjeta Crédito/Débito' },
    { value: 'wireTransfer', label: 'Transferencia SEPA' },
    { value: 'paypal', label: 'Paypal' },
    { value: 'apple', label: 'Apple Pay' },
    { value: 'google', label: 'Google Pay' },
];

export { CURRENCIES, CRYPTO_CURRENCIES, MERCHANTS };
