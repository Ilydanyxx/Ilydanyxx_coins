const express = require('express');
const { createOrder, getAllOrders } = require('../controllers/orderController');
const protect = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware');

const router = express.Router();

router.post('/', protect, createOrder);
router.get('/', protect, admin, getAllOrders);

module.exports = router;
