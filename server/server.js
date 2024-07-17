const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const usersRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const userDataRoute = require('./routes/userData');
const adminRoutes = require('./routes/adminRoutes'); 
const userRoutes = require('./routes/userRoutes');
const transactionRoute = require('./routes/transactionRoutes');
const walletRoute = require('./routes/walletRoutes');
const notificationRoute = require('./routes/notificationRoutes');
const crmRoutes = require('./routes/crmRoutes');
const depositRoute = require('./routes/depositRoutes');
const transactionInfoRoutes = require('./routes/transactionInfoRoutes');

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para manejar JSON
app.use(express.json());

// Configurar CORS
app.use(cors({
    origin: '*', // Ajusta esto según tus necesidades de seguridad
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
app.use('/api/transaction-info', transactionInfoRoutes);

// Configurar el puerto y arrancar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
