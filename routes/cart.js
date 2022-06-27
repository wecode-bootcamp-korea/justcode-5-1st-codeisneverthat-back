const express = require('express');
const { cartItemController, addCartItemController, deleteItemController, updateItemController} = require('../controllers/cart');

const routes = express.Router();

routes.get('/cart', cartItemController);
routes.post('/cart', addCartItemController);
routes.delete('/cart', deleteItemController);
routes.put('/cart', updateItemController)


module.exports = routes;

