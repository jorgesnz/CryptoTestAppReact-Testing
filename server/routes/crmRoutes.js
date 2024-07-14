const express = require('express');
const router = express.Router();
const { getUsers, getUserById, addDeposit, deleteUser } = require('../controllers/crmController');

// Obtener todos los usuarios
router.get('/users', getUsers);

// Obtener datos de un usuario por ID
router.get('/user/:id', getUserById);

// Añadir depósito a una wallet específica
router.post('/user/:id/deposit', addDeposit);

// Eliminar un usuario por ID
router.delete('/user/:id', deleteUser);

module.exports = router;
