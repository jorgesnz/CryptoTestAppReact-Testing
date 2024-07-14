const User = require('../models/User');
const TradingAccount = require('../models/TradingAccount');
const Wallet = require('../models/Wallet');

const bcrypt = require('bcryptjs');
const activityLogController = require('./activityLogController');

// Función para generar un ID aleatorio de 5 dígitos
const generateRandomId = () => {
    return Math.floor(10000 + Math.random() * 90000).toString();
};

// Función para generar una dirección de billetera aleatoria
const generateWalletAddress = () => {
    return '0x' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

exports.createUser = async (req, res) => {
    const { username, email, password, role } = req.body;
    if (!username || !email || !password || !role) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    try {
        // Buscar el rol correspondiente en la base de datos
        const roleObj = await Role.findOne({ name: role });
        if (!roleObj) {
            return res.status(400).json({ error: 'Rol no válido' });
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, email, password: hashedPassword, role: roleObj._id });
        const savedUser = await newUser.save();
        
        // Crear una cuenta de trading por defecto
        const newTradingAccount = new TradingAccount({
            userId: savedUser._id,
            tradingAccountId: generateRandomId(),  // Generar ID aleatorio de 5 dígitos
            accountName: username,
            email: email,
            leverage: '1:100',
            balance: 0.00,
            currency: 'EUR',
            accountType: 'Basica',
            platformType: 'Metatrader 4',
            status: 'Pendiente'
        });
        await newTradingAccount.save();

        // Crear wallets por defecto con direcciones aleatorias
        const cryptocurrencies = ['Bitcoin', 'Ethereum', 'Solana'];
        for (const crypto of cryptocurrencies) {
            const newWallet = new Wallet({
                userId: savedUser._id,
                cryptocurrency: crypto,
                walletAddress: generateWalletAddress(),  // Generar dirección de billetera aleatoria
                balance: 0.00
            });
            await newWallet.save();
        }

        // Registrar la actividad de creación de usuario
        await activityLogController.logActivity(savedUser._id, 'create_user', `Usuario ${username} creado`);

        res.status(201).json({ user: savedUser, tradingAccount: newTradingAccount });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateUserRole = async (req, res) => {
    try {
        const { role } = req.body;
        const user = await User.findByIdAndUpdate(req.params.id, { role }, { new: true });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getUserById = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findById(userId).select('-password'); // Excluir la contraseña
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const tradingAccount = await TradingAccount.findOne({ userId: userId });
        res.status(200).json({user, tradingAccount});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
