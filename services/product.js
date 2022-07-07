const productModel = require('../models/product');

async function readTop20() {
  console.log('services', readTop20);
  return await productModel.readTop20;
}

async function readProductDetails() {
  return await productModel.readProductDetails;
}

async function readCollectionListByCategory() {
  return await productModel.readCollectionListByCategory;
}

module.exports = {
  readTop20,
  readProductDetails,
  readCollectionListByCategory,
};
