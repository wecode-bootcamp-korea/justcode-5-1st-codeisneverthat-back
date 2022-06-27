const express = require('express');
const { cartItemController, addCartItemController } = require('../controllers/cart');

const routes = express.Router();

routes.get('/cart', cartItemController);
routes.post('/cart', addCartItemController);


module.exports = routes;

