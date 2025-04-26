const express = require('express');
const { getAllProducts, createProduct } = require('../controllers/productController');
const protect = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware');

const router = express.Router();

router.get('/', getAllProducts);
router.post('/', protect, admin, createProduct);

module.exports = router;
