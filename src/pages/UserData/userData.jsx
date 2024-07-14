const express = require('express');
const connectDB = require('./config/db');
const usersRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const userDataRoute = require('./routes/userData'); // Asegúrate de importar la ruta correctamente
const cors = require('cors');

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para manejar JSON
app.use(express.json());

// Configurar CORS
app.use(cors({
    origin: 'http://localhost:3000'
}));

// Rutas
app.use('/api/users', usersRoute);
app.use('/api/auth', authRoute);
app.use('/api/userdata', userDataRoute); // Configurar la ruta aquí

// Configurar el puerto y arrancar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
