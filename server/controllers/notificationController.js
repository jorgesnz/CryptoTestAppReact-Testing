const Notification = require('../models/Notification');

// Obtener todas las notificaciones de un usuario
exports.getNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find({ userId: req.params.userId });
        res.json(notifications);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Obtener una notificación específica por ID
exports.getNotificationById = async (req, res) => {
    try {
        const notification = await Notification.findById(req.params.notificationId);
        if (!notification) {
            return res.status(404).json({ message: 'Notificación no encontrada' });
        }
        res.json(notification);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Crear una nueva notificación
exports.createNotification = async (req, res) => {
    try {
        const newNotification = new Notification(req.body);
        await newNotification.save();
        res.status(201).json(newNotification);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Marcar una notificación como leída
exports.markAsRead = async (req, res) => {
    try {
        const notification = await Notification.findByIdAndUpdate(req.params.notificationId, { read: true }, { new: true });
        if (!notification) {
            return res.status(404).json({ message: 'Notificación no encontrada' });
        }
        res.json(notification);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Actualizar una notificación
exports.updateNotification = async (req, res) => {
    try {
        const updatedNotification = await Notification.findByIdAndUpdate(req.params.notificationId, req.body, { new: true });
        if (!updatedNotification) {
            return res.status(404).json({ message: 'Notificación no encontrada' });
        }
        res.json(updatedNotification);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Eliminar una notificación
exports.deleteNotification = async (req, res) => {
    try {
        const deletedNotification = await Notification.findByIdAndDelete(req.params.notificationId);
        if (!deletedNotification) {
            return res.status(404).json({ message: 'Notificación no encontrada' });
        }
        res.json({ message: 'Notificación eliminada' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
