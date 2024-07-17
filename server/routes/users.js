const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const TradingAccount = require('../models/TradingAccount');
const Wallet = require('../models/Wallet');
const crypto = require('crypto');

// Función para generar una dirección de wallet aleatoria
const generateWalletAddress = () => {
    return crypto.randomBytes(20).toString('hex');
};

router.post('/', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        // Verificar si el usuario ya existe
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: 'El correo electrónico ya está registrado' });
        }

        // Crear un nuevo usuario
        user = new User({
            firstName,
            lastName,
            email,
            password: await bcrypt.hash(password, 10)
        });

        await user.save();

        // Crear cuenta de trading por defecto
        const tradingAccount = new TradingAccount({
            userId: user._id,
            tradingAccountId: crypto.randomBytes(5).toString('hex'), // ID aleatorio de 5 bytes
        });

        await tradingAccount.save();

        // Crear wallets por defecto (Bitcoin, Ethereum, Solana)
        const wallets = [
            { cryptocurrency: 'btc', balance: 0.0000, address: generateWalletAddress() },
            { cryptocurrency: 'busd', balance: 0.0000, address: generateWalletAddress() },
            { cryptocurrency: 'eth', balance: 0.0000, address: generateWalletAddress() },
            { cryptocurrency: 'xrp', balance: 0.0000, address: generateWalletAddress() },
            { cryptocurrency: 'sol', balance: 0.0000, address: generateWalletAddress() },
            { cryptocurrency: 'usdt', balance: 0.0000, address: generateWalletAddress() },
            { cryptocurrency: 'ada', balance: 0.0000, address: generateWalletAddress() },
            { cryptocurrency: 'xph', balance: 0.0000, address: generateWalletAddress() },
            { cryptocurrency: 'matic', balance: 0.0000, address: generateWalletAddress() },
            { cryptocurrency: 'link', balance: 0.0000, address: generateWalletAddress() },
            { cryptocurrency: 'doge', balance: 0.0000, address: generateWalletAddress() },
            { cryptocurrency: 'tezos', balance: 0.0000, address: generateWalletAddress() },
            { cryptocurrency: 'okb', balance: 0.0000, address: generateWalletAddress() },
            { cryptocurrency: 'kadena', balance: 0.0000, address: generateWalletAddress() },
            { cryptocurrency: 'orchid', balance: 0.0000, address: generateWalletAddress() },
        ];
        

        for (const walletData of wallets) {
            const wallet = new Wallet({
                userId: user._id,
                walletId: crypto.randomBytes(5).toString('hex'), // ID aleatorio de 5 bytes
                ...walletData
            });
            await wallet.save();
        }

        res.status(201).json({ user });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Error creating user' });
    }
});

module.exports = router;
