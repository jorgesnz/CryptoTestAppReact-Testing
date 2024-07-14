const mongoose = require('mongoose');

const WalletSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    walletId: { type: String, required: true },
    cryptocurrency: { type: String, required: true },
    balance: { type: Number, default: 0.0000 },
    address: { type: String, required: true }
});

module.exports = mongoose.model('Wallet', WalletSchema);
