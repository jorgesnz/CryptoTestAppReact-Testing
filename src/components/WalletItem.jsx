import React from 'react';
import Spring from './Spring';

const WalletItem = ({ currency, item, i, className }) => {
    return (
        <Spring className={`crypto-item border-bottom ${className ? className : ''}`} index={i} type="list">
            <div className="crypto-icon">
                <img src={currency.icon} alt={currency.name} />
            </div>
            <div className="flex-1">
                <div className="d-flex align-items-center justify-content-between">
                    <h3>{currency.name}</h3>
                    <span className="h3">
                        {item.balance !== 0 ? item.balance : '0.00'}
                    </span>
                </div>
                <div className="d-flex align-items-center justify-content-between text-light">
                    <span>{currency.label}</span>
                    <span>{(item.balance * currency.exchange.usd).toFixed(2)} USD</span>
                </div>
            </div>
        </Spring>
    );
};

export default WalletItem;
