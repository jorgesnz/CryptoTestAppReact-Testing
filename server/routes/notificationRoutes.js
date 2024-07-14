// server/routes/notificationRoutes.js

const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// Obtener todas las notificaciones de un usuario
router.get('/user/:userId', notificationController.getNotifications);

// Obtener una notificación específica por ID
router.get('/notification/:notificationId', notificationController.getNotificationById);

// Crear una nueva notificación
router.post('/', notificationController.createNotification); // Asegúrate de que esta función esté definida

// Marcar una notificación como leída
router.put('/notification/:notificationId/read', notificationController.markAsRead);

// Actualizar una notificación
router.put('/notification/:notificationId', notificationController.updateNotification);

// Eliminar una notificación
router.delete('/notification/:notificationId', notificationController.deleteNotification);

module.exports = router;
