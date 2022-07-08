const express = require('express');
const {
  readCartItems,
  addCartItem,
  deleteCartItem,
  updateCartItem,
} = require('../controllers/cart');

const router = express.Router();

router.get('/', readCartItems);
router.post('/', addCartItem);
router.delete('/:id', deleteCartItem);
router.put('/:id', updateCartItem);

module.exports = router;
