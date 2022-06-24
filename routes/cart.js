const express = require('express');
const { cartItemController, addCartItemController } = require('../controllers/cart');

const router = express.Router();

router.get('./cart', cartItemController);
router.post('./cart', addCartItemController);


module.exports = router;
