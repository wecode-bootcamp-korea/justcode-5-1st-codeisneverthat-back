const express = require('express');
const {
  cartItemController,
  addCartItemController,
  deleteItemController,
  updateItemController,
} = require('../controllers/cart');

const router = express.Router();

router.get('/cart', cartItemController);
router.post('/cart', addCartItemController);
router.delete('/cart', deleteItemController);
router.put('/cart', updateItemController);

module.exports = router;
