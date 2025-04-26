const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./project-root/routes/auth');
const productRoutes = require('./project-root/routes/products');
const userRoutes = require('./project-root/routes/users');
const orderRoutes = require('./project-root/routes/orders');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
console.log(process.env.MONGO_URI);
// Підключення до бази даних
mongoose.connect(process.env.MONGO_URI)

  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });




// Роутинг
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// Запуск сервера
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});