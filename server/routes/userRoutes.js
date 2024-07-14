const express = require('express');
const router = express.Router();
const { updateUserRole } = require('../controllers/userController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

router.use(authMiddleware);
router.use(adminMiddleware);

router.put('/role/:id', updateUserRole);

module.exports = router;
