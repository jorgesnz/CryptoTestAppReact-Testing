const Transaction = require('../models/Transaction');

// Obtener todas las transacciones de un usuario
exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({ userId: req.params.userId });
        res.json(transactions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Crear una nueva transacción
exports.createTransaction = async (req, res) => {
    const transaction = new Transaction(req.body);
    try {
        const savedTransaction = await transaction.save();
        res.status(201).json(savedTransaction);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Eliminar una transacción
exports.deleteTransaction = async (req, res) => {
    try {
        const deletedTransaction = await Transaction.findByIdAndDelete(req.params.transactionId);
        if (!deletedTransaction) {
            return res.status(404).json({ message: 'Transacción no encontrada' });
        }
        res.status(200).json({ message: 'Transacción eliminada' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
