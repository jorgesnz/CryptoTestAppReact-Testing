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

import styles from './History.module.scss';

// Imágenes para los estados
import reviewingImage from '@assets/transactionStatus/reviewing.png';
import heldImage from '@assets/transactionStatus/locked.png';
import approvedImage from '@assets/transactionStatus/approved.png';

const History = ({ userId }) => {
    const [ref, { height }] = useMeasure();
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [transactionInfo, setTransactionInfo] = useState(null);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/transactions/${userId}`);
                setHistory(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching transaction history', error);
                setLoading(false);
            }
        };
        fetchHistory();
    }, [userId]);

    const fetchTransactionInfo = async (transactionId) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/transaction-info/${transactionId}`);
            setTransactionInfo(response.data);
        } catch (error) {
            console.error('Error fetching transaction info', error);
            setTransactionInfo(null);
        }
    };

    const dates = [...new Set(history.sort((a, b) => new Date(b.date) - new Date(a.date)).map((item) => dayjs(item.date).format('DD.MM.YYYY')))];

    const handleCloseModal = () => {
        setSelectedTransaction(null);
        setTransactionInfo(null);
    };

    const handleApproveTransaction = (transactionId) => {
        // Aquí puedes añadir la lógica para aprobar la transacción
        alert(`Transacción ${transactionId} aprobada`);
        handleCloseModal();
    };

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

    const getStatusImage = (status) => {
        switch (status) {
            case 'En revision':
                return reviewingImage;
            case 'Retenido':
                return heldImage;
            case 'Aprobado':
                return approvedImage;
            default:
                return null;
        }
    };

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

                            return (
                                <div className="d-flex flex-column g-8" key={date}>
                                    <span className="text-10">{date}</span>
                                    {filteredHistory.map((item, i) => (
                                        <Spring
                                            className="border-bottom pb-8"
                                            key={item._id}
                                            index={i}
                                            type="list"
                                        >
                                            <a href="#" onClick={async (e) => {
                                                e.preventDefault();
                                                setSelectedTransaction(item);
                                                await fetchTransactionInfo(item._id);
                                            }}>
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
                                            </a>
                                        </Spring>
                                    ))}
                                </div>
                            );
                        })
                    )}
                </div>
            </ScrollContainer>

            {selectedTransaction && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <h3>Estado de la Transacción</h3>
                        {transactionInfo && (
                            <img src={getStatusImage(transactionInfo.status)} alt={transactionInfo.status} className={styles.statusImage} />
                        )}
                        <p>{selectedTransaction.type}: {selectedTransaction.amount} {selectedTransaction.currencyLabel}</p>
                        <p>Estado: {transactionInfo ? transactionInfo.status : 'Cargando...'}</p>
                        {transactionInfo && transactionInfo.info && (
                            <p>Información adicional: {transactionInfo.info}</p>
                        )}
                        {transactionInfo && transactionInfo.status === 'En revision' && (
                            <p>
                                <strong>En revisión:</strong> La transacción está siendo revisada. Espere unos minutos mientras se completa el proceso.
                            </p>
                        )}
                        {transactionInfo && transactionInfo.status === 'Retenido' && (
                            <p></p>
                        )}
                        {transactionInfo && transactionInfo.status === 'Aprobado' && (
                            <p>
                                <strong>Aprobado:</strong> La transacción ha sido aprobada. Los fondos deberían estar disponibles en su cuenta.
                            </p>
                        )}
                        <div className={styles.modalButtons}>
                            <button className="btn btn--close" onClick={handleCloseModal}>&nbsp;&nbsp;&nbsp;&nbsp;Cerrar&nbsp;&nbsp;&nbsp;&nbsp;</button>
                        </div>
                    </div>
                </div>
            )}
        </Spring>
    );
};

export default History;
