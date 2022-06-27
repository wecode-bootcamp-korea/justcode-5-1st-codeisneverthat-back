const {addItem, deleteItem, updateItem} = require ('../models/cart')


async function addCartItem(user_id, product_details_id, quantity) {
    const addItemDto = {
        user_id, product_details_id, quantity  
    };

    await addItem(addItemDto);


}

async function deleteCartItem(user_id, product_details_id) {
    const deleteItemDto = {
        user_id, product_details_id
    };
    await deleteItem(deleteItemDto);
}

async function updateCartItem(user_id, product_details_id, quantity) {
    const updateItemDto = {
        user_id, product_details_id, quantity  
    };

    await updateItem(updateItemDto);
};

module.exports = {addCartItem, deleteCartItem, updateCartItem};
