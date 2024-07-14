const Wallet = require('../models/Wallet');
const Notification = require('../models/Notification');
const Transaction = require('../models/Transaction');

// Función para generar una dirección de billetera aleatoria
const generateWalletAddress = () => {
    return '0x' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

exports.createWallet = async (req, res) => {
    const { userId, cryptocurrency } = req.body;
    const newWallet = new Wallet({
        userId,
        cryptocurrency,
        walletAddress: generateWalletAddress(),  // Generar dirección de billetera aleatoria
        balance: 0.00
    });

    try {
        const savedWallet = await newWallet.save();
        res.status(201).json(savedWallet);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Añade esta función para obtener todas las wallets
exports.getWallets = async (req, res) => {
    try {
        const wallets = await Wallet.find().populate('userId', 'username email'); // Populate para obtener detalles del usuario
        res.status(200).json(wallets);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Depósito a una wallet
exports.depositToWallet = async (req, res) => {
    const { userId, walletId, amount, currency, currencyLabel } = req.body;
    try {
        const wallet = await Wallet.findOne({ _id: walletId, userId });

        if (!wallet) {
            return res.status(404).json({ message: 'Wallet not found' });
        }

        wallet.balance += amount;
        await wallet.save();

        // Crear notificación
        const notification = new Notification({
            userId,
            title: 'Deposito Recibido',
            text: `Has recibido un depósito de ${amount} ${currencyLabel}`,
            read: false,
            date: new Date()
        });
        await notification.save();

        // Crear transacción
        const transaction = new Transaction({
            userId,
            type: 'Deposito',
            amount,
            currency,
            currencyLabel,
            date: new Date()
        });
        await transaction.save();

        res.status(200).json(wallet);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Retiro de una wallet
exports.withdrawFromWallet = async (req, res) => {
    const { userId, walletId, amount, currency, currencyLabel } = req.body;
    try {
        const wallet = await Wallet.findOne({ _id: walletId, userId });

        if (!wallet) {
            return res.status(404).json({ message: 'No se ha encontrado la Wallet' });
        }

        if (wallet.balance < amount) {
            return res.status(400).json({ message: 'Fondos Insuficientes' });
        }

        wallet.balance -= amount;
        await wallet.save();

        // Crear notificación
        const notification = new Notification({
            userId,
            title: 'Retiro Realizado',
            text: `Has realizado un retiro de ${amount} ${currencyLabel}`,
            read: false,
            date: new Date()
        });
        await notification.save();

        // Crear transacción
        const transaction = new Transaction({
            userId,
            type: 'Retiro',
            amount,
            currency,
            currencyLabel,
            date: new Date()
        });
        await transaction.save();

        res.status(200).json(wallet);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Modificar el balance de una wallet
exports.modifyWalletBalance = async (req, res) => {
    const { walletId, balance } = req.body;
    try {
        const wallet = await Wallet.findById(walletId);

        if (!wallet) {
            return res.status(404).json({ message: 'No se ha encontrado la Wallet' });
        }

        wallet.balance = balance;
        await wallet.save();

        res.status(200).json(wallet);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
