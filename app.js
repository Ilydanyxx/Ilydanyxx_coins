const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

// Імпорт роутів
const authRoutes = require('./project-root/routes/auth');
const productRoutes = require('./project-root/routes/products');
const userRoutes = require('./project-root/routes/users');
const orderRoutes = require('./project-root/routes/orders');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Оголошуємо папку для статичних ресурсів
app.use(express.static(path.join(__dirname, 'project-root/public')));

// Оголошуємо папку для views як статичну
app.use(express.static(path.join(__dirname, 'project-root/views')));

// API роутинг
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// Маршрути для HTML сторінок
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'project-root/views/index.html'));
});

app.get('/admin.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'project-root/views/admin.html'));
});

app.get('/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'project-root/views/login.html'));
});

app.get('/register.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'project-root/views/register.html'));
});

// Підключення до MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
