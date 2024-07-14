const ActivityLog = require('../models/ActivityLog');

exports.logActivity = async (userId, action, details) => {
    const newLog = new ActivityLog({ userId, action, details });
    try {
        await newLog.save();
    } catch (err) {
        console.error('Error logging activity:', err);
    }
};

exports.getActivities = async (req, res) => {
    const { userId } = req.params;
    try {
        const activities = await ActivityLog.find({ userId });
        res.status(200).json(activities);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
