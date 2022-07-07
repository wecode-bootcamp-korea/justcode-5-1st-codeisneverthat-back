const express = require('express');

const userRouter = require('./user');
const productRouter = require('./product');
const cartRouter = require('./cart');
const { validateToken } = require('../middlewares/validateToken');

const router = express.Router();

router.use(userRouter);
router.use(productRouter);
router.use('/cart', validateToken, cartRouter);

module.exports = router;
(module.exports = userRouter), productRouter, cartRouter;
