const serverless = require('serverless-http');
const express = require('express');
const connectDB = require('../../server/config/db');
const cors = require('cors');
require('dotenv').config();

const usersRoute = require('../../server/routes/users');
const authRoute = require('../../server/routes/auth');
const userDataRoute = require('../../server/routes/userData');
const adminRoutes = require('../../server/routes/adminRoutes');
const userRoutes = require('../../server/routes/userRoutes');
const transactionRoute = require('../../server/routes/transactionRoutes');
const walletRoute = require('../../server/routes/walletRoutes');
const notificationRoute = require('../../server/routes/notificationRoutes');
const crmRoutes = require('../../server/routes/crmRoutes');
const depositRoute = require('../../server/routes/depositRoutes');

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para manejar JSON
app.use(express.json());

// Configurar CORS
app.use(cors({
    origin: '*' // Puedes agregar más orígenes si es necesario
}));

// Rutas
app.use('/api/users', usersRoute);
app.use('/api/auth', authRoute);
app.use('/api/userdata', userDataRoute);
app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);
app.use('/api/transactions', transactionRoute);
app.use('/api/wallets', walletRoute);
app.use('/api/notifications', notificationRoute);
app.use('/api/crm', crmRoutes);
app.use('/api/deposits', depositRoute);

module.exports.handler = serverless(app);
