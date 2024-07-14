const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    getUserById,
    updateUser,
    createDeposit,
    createWithdrawal,
    createNotification,
    createTransaction,
    deleteTransaction
} = require('../controllers/adminController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

// Middleware de autenticación y autorización
router.use(authMiddleware);
router.use(adminMiddleware);

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.post('/users/:id/deposit', createDeposit);
router.post('/users/:id/withdrawal', createWithdrawal);
router.post('/users/:id/notification', createNotification);
router.post('/users/:id/transaction', createTransaction);
router.delete('/transactions/:id', deleteTransaction);

// Nueva ruta para obtener las carteras del usuario
router.get('/users/:id/wallets', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate('wallets');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user.wallets);
    } catch (error) {
        console.error('Error fetching wallets:', error);
        res.status(500).json({ error: 'Error fetching wallets' });
    }
});

module.exports = router;
