const express = require('express');
const router = express.Router();
const tradingAccountController = require('../controllers/tradingAccountController');

router.post('/', tradingAccountController.createTradingAccount);
router.get('/', tradingAccountController.getTradingAccounts);  // Añade esta línea para la nueva ruta

module.exports = router;
