const {
  readTop20Controller,
  readProductDetailsController,
} = require('../controllers/product');
const express = require('express');

const router = express.Router();

router.get('/top20', readTop20Controller);
router.get('/product/:id', readProductDetailsController);

module.exports = router;
