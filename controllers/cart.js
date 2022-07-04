const jwt = require('jsonwebtoken');

const { getCartById } = require('../models/cart');
const {
  addCartItem,
  deleteCartItem,
  updateCartItem,
} = require('../services/cart');

const cartItemController = async (req, res) => {
  const userId = req.userId;
  const cartItems = await getCartById(userId);
  return res.json(cartItems);
};

const addCartItemController = async (req, res) => {
  const userId = req.userId;
  const { product_details_id, quantity } = req.body;
  await addCartItem(userId, product_details_id, quantity);

  res.status(201).json({ message: 'item added successfully' });
};

const deleteItemController = async (req, res) => {
  const userId = req.userId;
  const { product_details_id } = req.body;
  await deleteCartItem(userId, product_details_id);

  res.status(201).json({ message: 'item deleted successfully' });
};

const updateItemController = async (req, res) => {
  const userId = req.userId;
  const { product_details_id, quantity, cal } = req.body;
  if (cal === 'minus') {
    await updateCartItem(userId, product_details_id, quantity - 1);
  } else {
    await updateCartItem(userId, product_details_id, quantity + 1);
  }

  res.status(201).json({ message: 'item updated successfully' });
};

module.exports = {
  cartItemController,
  addCartItemController,
  deleteItemController,
  updateItemController,
};
