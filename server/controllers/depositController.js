// server/controllers/depositController.js
const Transaction = require('../models/Transaction');
const User = require('../models/User');
const Wallet = require('../models/Wallet');
const Notification = require('../models/Notification');

exports.addDeposit = async (req, res) => {
    const { walletId, amount } = req.body;
    const { id } = req.params;

    try {
        const user = await User.findById(id).populate('wallets');
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const wallet = await Wallet.findById(walletId);
        if (!wallet) {
            return res.status(404).json({ message: 'Billetera no encontrada' });
        }

        if (wallet.userId.toString() !== id) {
            return res.status(403).json({ message: 'La billetera no pertenece al usuario.' });
        }

        wallet.balance += parseFloat(amount);
        await wallet.save();

        // Crear transacción
        const transaction = new Transaction({
            userId: id,
            type: 'deposit',
            amount: amount,
            currency: wallet.cryptocurrency,
            currencyLabel: wallet.cryptocurrency
        });
        await transaction.save();

        // Crear notificación
        const notification = new Notification({
            userId: id,
            title: 'Depósito añadido',
            text: `Depósito de ${amount} ${wallet.cryptocurrency} añadido a tu cuenta.`,
            date: new Date()
        });
        await notification.save();

        res.status(201).json({ message: 'Depósito añadido y transacción creada con éxito.' });
    } catch (error) {
        console.error('Error processing deposit:', error); // Añadir log para más información
        res.status(500).json({ message: error.message });
    }
};
