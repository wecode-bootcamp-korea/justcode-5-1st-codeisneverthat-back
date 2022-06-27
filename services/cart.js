const {addItem} = require ('../models/cart')


async function addCartItem(user_id, product_details_id, quantity) {
    const addItemDto = {
        user_id, product_details_id, quantity  
    };

    await addItem(addItemDto);


}

module.exports = {addCartItem};
