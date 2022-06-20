const express = require('express');

const userRouter = require('./user');
// const otherRouter = require('./other');

const router = express.Router();

router.use(userRouter);
// router.use(otherRouter);

module.exports = router;
