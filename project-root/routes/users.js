// routes/users.js

const express = require('express');
const router = express.Router();
const { getAllUsers, createUser } = require('../controllers/userController'); // Імпортуємо контролер

// Маршрут для отримання всіх користувачів
router.get('/', getAllUsers);

// Маршрут для створення нового користувача
router.post('/', createUser);

module.exports = router;
