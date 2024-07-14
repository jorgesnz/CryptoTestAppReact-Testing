const express = require('express');
const router = express.Router();
const activityLogController = require('../controllers/activityLogController');

router.get('/:userId', activityLogController.getActivities);

module.exports = router;
