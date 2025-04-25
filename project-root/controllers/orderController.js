const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const { userId, items, total } = req.body;
  const order = new Order({ userId, items, total });
  await order.save();
  res.status(201).json({ message: 'Замовлення створено' });
};

exports.getAllOrders = async (req, res) => {
  const orders = await Order.find().populate('userId').populate('items.productId');
  res.json(orders);
};
