const jwt = require('jsonwebtoken');

const { getCartById } = require('../models/cart');
const {
  addCartItem,
  deleteCartItem,
  updateCartItem,
} = require('../services/cart');

const cartItemController = async (req, res) => {
  // const token = req.header('Authorization');
  // const user_id = jwt.verify(token, process.env.SECRET_KEY);
  // const cartItems = await getCartById(user_id);
  cartItems = req.userId;
  return res.json(cartItems);
};

const addCartItemController = async (req, res) => {
  // const token = req.header('Authorization');
  // const user_id = jwt.verify(token, process.env.SECRET_KEY);
  const { product_details_id, quantity } = req.body;
  await addCartItem(user_id.id, product_details_id, quantity);

  res.status(201).json({ message: 'item added successfully' });
};

const deleteItemController = async (req, res) => {
  const token = req.header('Authorization');
  const user_id = jwt.verify(token, process.env.SECRET_KEY);

  const { product_details_id } = req.body;
  await deleteCartItem(user_id.id, product_details_id);

  res.status(201).json({ message: 'item deleted successfully' });
};

const updateItemController = async (req, res) => {
  const token = req.header('Authorization');
  const user_id = jwt.verify(token, process.env.SECRET_KEY);

  const { product_details_id, quantity, cal } = req.body;
  if (cal === 'minus') {
    await updateCartItem(user_id.id, product_details_id, quantity - 1);
  } else {
    await updateCartItem(user_id.id, product_details_id, quantity + 1);
  }

  res.status(201).json({ message: 'item updated successfully' });
};

module.exports = {
  cartItemController,
  addCartItemController,
  deleteItemController,
  updateItemController,
};
