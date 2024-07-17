const TransactionInfo = require('../models/TransactionInfo');
const Transaction = require('../models/Transaction');

exports.createTransactionInfo = async (req, res) => {
    const { transactionId, info, status } = req.body;

    try {
        const transaction = await Transaction.findById(transactionId);
        if (!transaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }

        const newTransactionInfo = new TransactionInfo({
            transactionId,
            info,
            status
        });

        await newTransactionInfo.save();

        res.status(201).json(newTransactionInfo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getTransactionInfoByTransactionId = async (req, res) => {
    const { transactionId } = req.params;

    try {
        const transactionInfo = await TransactionInfo.findOne({ transactionId });
        if (!transactionInfo) {
            return res.status(404).json({ message: 'Transaction info not found' });
        }

        res.status(200).json(transactionInfo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getTransactionInfoByTransactionId = async (req, res) => {
    const { transactionId } = req.params;

    try {
        const transactionInfo = await TransactionInfo.findOne({ transactionId });
        if (!transactionInfo) {
            return res.status(404).json({ message: 'Transaction info not found' });
        }

        res.status(200).json(transactionInfo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
