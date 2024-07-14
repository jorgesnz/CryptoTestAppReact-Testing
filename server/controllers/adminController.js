const User = require('../models/User');
const Wallet = require('../models/Wallet');
const Transaction = require('../models/Transaction');
const Notification = require('../models/Notification');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({})
            .populate('wallets')
            .populate('transactions')
            .populate('notifications');
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Error fetching users' });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
            .populate('wallets')
            .populate('transactions')
            .populate('notifications');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Error fetching user' });
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .populate('wallets')
            .populate('transactions')
            .populate('notifications');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Error updating user' });
    }
};

const createDeposit = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const wallet = await Wallet.findById(req.body.walletId);
        if (!wallet) {
            return res.status(404).json({ error: 'Wallet not found' });
        }
        wallet.balance += req.body.amount;
        await wallet.save();
        res.status(200).json(wallet);
    } catch (error) {
        console.error('Error creating deposit:', error);
        res.status(500).json({ error: 'Error creating deposit' });
    }
};

const createWithdrawal = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const wallet = await Wallet.findById(req.body.walletId);
        if (!wallet) {
            return res.status(404).json({ error: 'Wallet not found' });
        }
        if (wallet.balance < req.body.amount) {
            return res.status(400).json({ error: 'Insufficient balance' });
        }
        wallet.balance -= req.body.amount;
        await wallet.save();
        res.status(200).json(wallet);
    } catch (error) {
        console.error('Error creating withdrawal:', error);
        res.status(500).json({ error: 'Error creating withdrawal' });
    }
};

const createNotification = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const notification = new Notification(req.body);
        await notification.save();
        user.notifications.push(notification);
        await user.save();
        res.status(200).json(notification);
    } catch (error) {
        console.error('Error creating notification:', error);
        res.status(500).json({ error: 'Error creating notification' });
    }
};

const createTransaction = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const transaction = new Transaction(req.body);
        await transaction.save();
        user.transactions.push(transaction);
        await user.save();
        res.status(200).json(transaction);
    } catch (error) {
        console.error('Error creating transaction:', error);
        res.status(500).json({ error: 'Error creating transaction' });
    }
};

const deleteTransaction = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const transaction = await Transaction.findByIdAndDelete(req.params.transactionId);
        if (!transaction) {
            return res.status(404).json({ error: 'Transaction not found' });
        }
        user.transactions.pull(transaction);
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        console.error('Error deleting transaction:', error);
        res.status(500).json({ error: 'Error deleting transaction' });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    createDeposit,
    createWithdrawal,
    createNotification,
    createTransaction,
    deleteTransaction
};
