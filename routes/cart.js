const express = require('express');
const {
  cartItemController,
  addCartItemController,
  deleteItemController,
  updateItemController,
} = require('../controllers/cart');
const { validateToken } = require('../ middlewares/validateToken');

const router = express.Router();

router.get('/cart', validateToken, cartItemController);
router.post('/cart', validateToken, addCartItemController);
router.delete('/cart', validateToken, deleteItemController);
router.put('/cart', validateToken, updateItemController);

module.exports = router;
