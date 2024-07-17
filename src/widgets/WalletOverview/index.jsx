import React, { useState, useEffect } from 'react';
import { memo } from 'react';
import useMeasure from 'react-use-measure';

// styling
import styles from './style.module.scss';

// components
import WidgetHeader from '@components/WidgetHeader';
import StyledSelect from '@ui/StyledSelect';
import WalletItem from '@components/WalletItem';
import Spring from '@components/Spring';
import LazyImage from '@components/LazyImage';
import ScrollContainer from '@components/ScrollContainer';

// constants
import { CRYPTO_CURRENCIES, CURRENCIES } from '@constants/currencies';

// assets
import wallet from '@assets/wallet.webp';
import bg from '@assets/mountains.svg';
import iconLight from '@assets/icons/icon-wallet-light.svg';
import iconDark from '@assets/icons/icon-wallet-dark.svg';

const WalletOverview = ({ userData, tradingData, wallets, withTitle = true }) => {
    const [ref, { height }] = useMeasure();
    const [totalCurrency, setTotalCurrency] = useState(CURRENCIES[0]);
    const [totalBalance, setTotalBalance] = useState(0);
    const [tradingBalance, setTradingBalance] = useState(0); // Estado para el balance de trading

    useEffect(() => {
        if (userData && tradingData && wallets) {
            const calculateTotalBalance = () => {
                let totalInSelectedCurrency = 0;

                const getCurrencyExchangeRate = (currency, targetCurrency) => {
                    const currencyData = CRYPTO_CURRENCIES.find(c => c.value === currency);
                    return currencyData ? (currencyData.exchange[targetCurrency] || 1) : 1;
                };

                wallets.forEach(wallet => {
                    const exchangeRateToSelectedCurrency = getCurrencyExchangeRate(wallet.cryptocurrency, totalCurrency.value);
                    totalInSelectedCurrency += wallet.balance * exchangeRateToSelectedCurrency;
                });

                const tradingBalanceInSelectedCurrency = tradingData.balance * getCurrencyExchangeRate(tradingData.currency, totalCurrency.value);
                totalInSelectedCurrency += tradingBalanceInSelectedCurrency;

                setTotalBalance(totalInSelectedCurrency.toFixed(2));
                setTradingBalance(tradingData.balance.toFixed(2)); // Actualiza el estado del balance de trading
            };

            calculateTotalBalance();
        }
    }, [userData, tradingData, wallets, totalCurrency]);

    if (!userData || !tradingData || !wallets) {
        return <div>Cargando datos...</div>;
    }

    const mapWalletData = (wallets) => {
        return wallets.map(wallet => {
            const currency = CRYPTO_CURRENCIES.find(c => c.value === wallet.cryptocurrency);
            if (!currency) {
                console.error(`Currency not found: ${wallet.cryptocurrency}`);
                return null;
            }
            return {
                ...wallet,
                ...currency,
            };
        }).filter(wallet => wallet !== null);
    };

    const mappedWallets = mapWalletData(wallets);

    return (
        <Spring className="widget">
            <div className="d-flex flex-column g-16 pb-16" ref={ref}>
                {
                    withTitle &&
                    <WidgetHeader className="pb-0" title="Mis Activos" iconLight={iconLight} iconDark={iconDark} />
                }
                <div className={`${styles.total} card card--dark d-flex`}>
                    <img className="total_bg cover" src={bg} alt="media" />
                    <div className={styles.total_main}>
                        <span className="text-dark text-12 text-600 lh-1">Balance</span>
                        <div className="d-flex align-items-end g-8">
                            <span className="text-large text-white">{totalBalance}</span>
                            <StyledSelect
                                value={totalCurrency}
                                onChange={setTotalCurrency}
                                options={CURRENCIES}
                                variant="minimal"
                            />
                        </div>
                        <span className="text-600 text-dark lh-1">
                            <span className="text-14 text-white lh-1">{tradingBalance}</span> {tradingData.currency.toUpperCase()}
                        </span>
                    </div>
                    <LazyImage className={styles.total_media} effect="opacity" src={wallet} alt="Mis Activos" />
                </div>
            </div>
            <ScrollContainer height={height - 1} bg="widget-bg">
                <div className="track card">
                    {
                        mappedWallets.map((item, i) => (
                            <WalletItem key={i} currency={item} item={item} i={i} />
                        ))
                    }
                </div>
            </ScrollContainer>
        </Spring>
    );
};

export default memo(WalletOverview);
