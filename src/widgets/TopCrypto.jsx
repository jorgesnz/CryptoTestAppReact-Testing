import React from 'react';

// components
import WidgetHeader from '@components/WidgetHeader';
import Spring from '@components/Spring';
import ScrollContainer from '@components/ScrollContainer';

// constants
import {CRYPTO_CURRENCIES} from '@constants/currencies';

// hooks
import {useWindowSize} from 'react-use';
import useMeasure from 'react-use-measure';

// assets
import iconLight from '@assets/icons/icon-hot-light.svg';
import iconDark from '@assets/icons/icon-hot-dark.svg';
import graph1 from '@assets/graphs/1.svg';
import graph2 from '@assets/graphs/2.svg';
import graph3 from '@assets/graphs/3.svg';
import graph4 from '@assets/graphs/4.svg';
import graph5 from '@assets/graphs/5.svg';
import graph6 from '@assets/graphs/6.svg';

const TopCrypto = ({ wallets }) => {
    const [ref, { height }] = useMeasure();
    const { width } = useWindowSize();

    const data = [
        { key: 'btc', price: 19953.10, change: 1.76, graph: graph1 },
        { key: 'eth', price: 1613.86, change: -1.39, graph: graph2 },
        { key: 'usdt', price: 0.997, change: 0.12, graph: graph3 },
        { key: 'ada', price: 0.469800, change: 1.76, graph: graph4 },
        { key: 'busd', price: 0.1832, change: -1.2, graph: graph5 },
        { key: 'link', price: 7.36, change: -5.76, graph: graph6 },
        { key: 'doge', price: 1613.86, change: -1.39, graph: graph2 },
        { key: 'tezos', price: 0.997, change: 0.12, graph: graph3 },
    ];

    return (
        <Spring className="widget">
            <WidgetHeader title="Top Cryptocurrency" iconLight={iconLight} iconDark={iconDark} innerRef={ref} />
            <ScrollContainer height={height} bg="widget-bg">
                <div className="track card">
                    {
                        data.map((item, i) => {
                            const currency = CRYPTO_CURRENCIES.find(currency => currency.value === item.key);
                            if (!currency) {
                                console.error(`Wallet no encontrada: ${item.key}`);
                                return null;
                            }
                            const { name, icon, label } = currency;

                            return (
                                <Spring className="crypto-item border-bottom" key={item.key} index={i} type="list">
                                    <div className="d-flex align-items-center g-8">
                                        <div className="crypto-icon">
                                            <img src={icon} alt={item.key} />
                                        </div>
                                        <div style={{ width: 80 }}>
                                            <h4 className="text-overflow">{name}</h4>
                                            <span>{label}</span>
                                        </div>
                                    </div>
                                    {width >= 414 && <img className="graph" src={item.graph} alt={item.key} />}
                                    <div className="d-flex flex-column text-right">
                                        <span className="item_price h4">{item.price}</span>
                                        <span className={`text-600 ${item.change > 0 ? 'text-green' : 'text-red'}`}>
                                            {item.change}%
                                        </span>
                                    </div>
                                </Spring>
                            );
                        })
                    }
                </div>
            </ScrollContainer>
        </Spring>
    );
}

export default TopCrypto;