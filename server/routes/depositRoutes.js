// server/routes/depositRoutes.js
const express = require('express');
const router = express.Router();
const depositController = require('../controllers/depositController');

router.post('deposit/:id/deposit', depositController.addDeposit);

module.exports = router;
