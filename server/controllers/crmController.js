const User = require('../models/User');
const Wallet = require('../models/Wallet');
const Transaction = require('../models/Transaction');
const Notification = require('../models/Notification');

// Obtener todos los usuarios
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Obtener datos de un usuario por ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const wallets = await Wallet.find({ userId: user._id });
        res.json({ ...user.toObject(), wallets });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Añadir depósito a una wallet específica
exports.addDeposit = async (req, res) => {
    const { walletId, amount } = req.body;
    const { id } = req.params;

    try {
        const user = await User.findById(id).populate('wallets');
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const wallet = await Wallet.findOne({ _id: walletId, userId: id });
        if (!wallet) {
            return res.status(404).json({ message: 'Billetera no encontrada' });
        }

        wallet.balance += parseFloat(amount);
        await wallet.save();

        // Crear transacción con la estructura especificada
        const transaction = new Transaction({
            id: `operation-${Date.now()}`, // Genera un ID único basado en el timestamp actual
            userId: id,
            type: 'Depósito',
            amount: parseFloat(amount),
            currency: wallet.cryptocurrency,
            currencyLabel: `${wallet.cryptocurrency} (${wallet.cryptocurrency.toUpperCase()})`,
            date: new Date()
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

        res.status(201).json({ message: 'Depósito añadido y transacción creada con éxito.', wallet, transaction, notification });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Eliminar un usuario por ID
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await User.deleteOne({ _id: req.params.id });
        await Wallet.deleteMany({ userId: req.params.id });
        res.json({ message: 'User and associated wallets deleted successfully' });
    } catch (err) {
        res.status500().json({ message: err.message });
    }
};
