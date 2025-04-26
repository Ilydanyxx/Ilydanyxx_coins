// controllers/userController.js

const User = require('../models/User'); // Підключаємо модель користувача (потрібно створити User модель)

// Отримання всіх користувачів
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // Використовуємо Mongoose для отримання всіх користувачів
    res.status(200).json(users); // Відправляємо список користувачів у відповідь
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Створення нового користувача
const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new User({
      name,
      email,
      password, // Для реального проекту треба хешувати пароль перед збереженням
    });

    await newUser.save(); // Зберігаємо нового користувача в базі даних
    res.status(201).json(newUser); // Відправляємо створеного користувача як відповідь
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

module.exports = { getAllUsers, createUser };

