const productModel = require('../models/product');

async function readTop20() {
  return await productModel.readTop20();
}

async function readProductDetails(id) {
  return await productModel.readProductDetails(id);
}

async function readCollectionListByCategory(category) {
  return await productModel.readCollectionListByCategory(category);
}

module.exports = {
  readTop20,
  readProductDetails,
  readCollectionListByCategory,
};
