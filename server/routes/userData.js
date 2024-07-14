const express = require('express');
const router = express.Router();
const User = require('../models/User');
const TradingAccount = require('../models/TradingAccount');
const Wallet = require('../models/Wallet');
const { authMiddleware } = require('../middleware/authMiddleware');

// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        const userData = await Promise.all(users.map(async user => {
            const tradingAccount = await TradingAccount.findOne({ userId: user._id });
            const wallets = await Wallet.find({ userId: user._id });
            return {
                user,
                tradingAccount,
                wallets
            };
        }));
        console.log('UserData Route:', userData);
        res.status(200).json(userData);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Error fetching users' });
    }
});

// Ruta específica para el dashboard
router.get('/dashboard/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const tradingAccount = await TradingAccount.findOne({ userId });
        const wallets = await Wallet.find({ userId });

        console.log('Dashboard Route Data:', { user, tradingAccount, wallets });

        res.status(200).json({
            user,
            tradingAccount,
            wallets,
        });
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        res.status(500).json({ error: 'Error fetching dashboard data' });
    }
});

// Ruta para verificar roles de 'agent' y 'admin' basado en userId
router.get('/UserRole/:userId/verify-role', authMiddleware, async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId); // Filtra por ID del usuario
        if (user.role === 'agent' || user.role === 'admin') {
            res.status(200).json({ message: 'Access granted', role: user.role });
        } else {
            res.status(403).json({ message: 'Access denied' });
        }
    } catch (error) {
        console.error('Error verifying role:', error);
        res.status(500).json({ error: 'Error verifying role' });
    }
});

// Nueva ruta para obtener los datos del usuario actual
router.get('/current-user/:userId', authMiddleware, async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId).select('-password'); // Excluir la contraseña
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ user });
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Error fetching user data' });
    }
});

module.exports = router;
