const { getCartItemsById } = require('../models/cart');
const cartService = require('../services/cart');

const readCartItems = async (req, res) => {
  const userId = req.userId;
  const cartItems = await getCartItemsById(userId);
  return res.json(cartItems);
};

const addCartItem = async (req, res) => {
  const userId = req.userId;
  const { product_details_id, quantity } = req.body;
  console.log(req.userId, req.body);
  await cartService.addCartItem(userId, product_details_id, quantity);

  res.status(201).json({ message: 'item added successfully' });
};

const deleteCartItem = async (req, res) => {
  const cartId = req.params.id;
  try {
    await cartService.deleteCartItem(cartId);
  } catch (err) {
    console.log(err);
  }
  res.status(204);
};

const updateCartItem = async (req, res) => {
  const cartId = req.params.id;
  const { quantity, cal } = req.body;
  const calCondition = {
    minus: quantity - 1,
    plus: quantity + 1,
  };
  try {
    await cartService.updateCartItem(cartId, calCondition[cal]);
  } catch (err) {
    console.log(err);
  }
  res.status(200).json({ message: 'item updated successfully' });
};

module.exports = {
  readCartItems,
  addCartItem,
  deleteCartItem,
  updateCartItem,
};
