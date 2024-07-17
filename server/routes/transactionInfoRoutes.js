const express = require('express');
const router = express.Router();
const transactionInfoController = require('../controllers/transactionInfoController');

router.post('/', transactionInfoController.createTransactionInfo);
router.get('/:transactionId', transactionInfoController.getTransactionInfoByTransactionId);

module.exports = router;
