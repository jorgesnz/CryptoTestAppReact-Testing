const express = require('express');
const router = express.Router();
const walletController = require('../controllers/walletController');

router.post('/', walletController.createWallet);
router.get('/', walletController.getWallets);  // Añade esta línea para la nueva ruta
router.post('/deposit', walletController.depositToWallet);
router.post('/withdraw', walletController.withdrawFromWallet);
router.put('/modifyBalance', walletController.modifyWalletBalance);

module.exports = router;
