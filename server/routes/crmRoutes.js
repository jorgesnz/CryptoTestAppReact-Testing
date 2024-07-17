const express = require('express');
const router = express.Router();
const { getUsers, getUserById, addDeposit, addWithdraw, deleteUser } = require('../controllers/crmController');

// Obtener todos los usuarios
router.get('/users', getUsers);

// Obtener datos de un usuario por ID
router.get('/user/:id', getUserById);

// Añadir depósito a una wallet específica
router.post('/user/:id/deposit', addDeposit);

// Crear Retiro
router.post('/user/:id/withdraw', addWithdraw);

// Eliminar un usuario por ID
router.delete('/user/:id', deleteUser);

module.exports = router;
