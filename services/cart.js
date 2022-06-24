const {getCartById, addItem} = require ('../models/cart')

async function getCartItem(userId) {
    const cart = await getCartById(userId);

}

async function addCartItem(userId, productDetails) {
    const addItemDto = {
        
    };


}

module.exports = {getCartItem, addCartItem };

