const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.get('/:userId', transactionController.getTransactions);
router.post('/', transactionController.createTransaction);
router.delete('/:transactionId', transactionController.deleteTransaction);  // Ruta para eliminar una transacción

module.exports = router;
