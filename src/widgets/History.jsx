import React, { useEffect, useState } from 'react';
import axios from 'axios';

// components
import WidgetHeader from '@components/WidgetHeader';
import Spring from '@components/Spring';
import ScrollContainer from '@components/ScrollContainer';

// hooks
import useMeasure from 'react-use-measure';

// utils
import dayjs from 'dayjs';

// assets
import iconLight from '@assets/icons/icon-history-light.svg';
import iconDark from '@assets/icons/icon-history-dark.svg';

const History = ({ userId }) => {
    const [ref, { height }] = useMeasure();
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/transactions/${userId}`);
                setHistory(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching transaction history', error);
                setLoading(false);
            }
        };
        fetchHistory();
    }, [userId]);

    const dates = [...new Set(history.sort((a, b) => new Date(b.date) - new Date(a.date)).map((item) => dayjs(item.date).format('DD.MM.YYYY')))];

    return (
        <Spring className="widget">
            <WidgetHeader title="Historial Transacciones" iconLight={iconLight} iconDark={iconDark} innerRef={ref} />
            <ScrollContainer height={height} bg="widget-bg">
                <div className="track widget_body card">
                    {loading ? (
                        <div>Cargando...</div>
                    ) : (
                        dates.map((date) => {
                            const filteredHistory = history.filter((item) => dayjs(item.date).format('DD.MM.YYYY') === date);

                            const convert = (value, currency) => {
                                switch (currency) {
                                    case 'eth':
                                        return value * 1579.61;
                                    case 'btc':
                                        return value * 21179.80;
                                    default:
                                        return value;
                                }
                            };

                            return (
                                <div className="d-flex flex-column g-8" key={date}>
                                    <span className="text-10">{date}</span>
                                    {filteredHistory.map((item, i) => (
                                        <Spring className="border-bottom pb-8" key={item._id} index={i} type="list">
                                            <div className="d-flex justify-content-between h3">
                                                <span>{item.currencyLabel}</span>
                                                <span>{item.amount}</span>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <span className={`text-capitalize text-600 ${item.type === 'Depósito' ? 'text-green' : 'text-red'}`}>
                                                    {item.type}
                                                </span>
                                                <span>
                                                    {convert(item.amount, item.currency).toFixed(2)} USD
                                                </span>
                                            </div>
                                        </Spring>
                                    ))}
                                </div>
                            );
                        })
                    )}
                </div>
            </ScrollContainer>
        </Spring>
    );
};

export default History;
