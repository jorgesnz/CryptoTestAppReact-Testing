const TradingAccount = require('../models/TradingAccount');

const generateRandomId = () => {
    return Math.floor(10000 + Math.random() * 90000).toString();
};

exports.createTradingAccount = async (req, res) => {
    const { userId, accountName, email } = req.body;
    const newTradingAccount = new TradingAccount({
        userId,
        tradingAccountId: generateRandomId(),
        accountName,
        email
    });

    try {
        const savedTradingAccount = await newTradingAccount.save();
        res.status(201).json(savedTradingAccount);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Añade esta función para obtener todas las cuentas de trading
exports.getTradingAccounts = async (req, res) => {
    try {
        const tradingAccounts = await TradingAccount.find().populate('userId', 'username email'); // Populate para obtener detalles del usuario
        res.status(200).json(tradingAccounts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
