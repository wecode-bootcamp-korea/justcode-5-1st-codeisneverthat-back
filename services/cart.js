const {addItem} = require ('../models/cart')

// async function getCartItem(user_id) {
//     const cart = await getCartById(user_id);
//     return cart;

// }

async function addCartItem(user_id, product_details_id, quantity) {
    const addItemDto = {
        user_id, product_details_id, quantity  
    };

    await addItem(addItemDto);


}

module.exports = {addCartItem};
