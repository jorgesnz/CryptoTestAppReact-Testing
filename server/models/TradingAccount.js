const mongoose = require('mongoose');

const TradingAccountSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tradingAccountId: { type: String, required: true },
    leverage: { type: String, default: '1:100' },
    balance: { type: Number, default: 0.00 },
    currency: { type: String, default: 'EUR' },
    accountType: { type: String, default: 'Basica' },
    platformType: { type: String, default: 'Metatrader 4' },
    status: { type: String, default: 'Pendiente' }
});

module.exports = mongoose.model('TradingAccount', TradingAccountSchema);
