const { getCartById } = require('../models/cart');
const {addCartItem, deleteCartItem, updateCartItem }= require ('../services/cart');

const cartItemController = async (req,res) => {
    const {user_id} = req.body;  
    const cartItems =  await getCartById(user_id);
    return res.json(cartItems);


};

const addCartItemController = async (req,res)=>{
    const {user_id,product_details_id, quantity} = req.body; 
    await addCartItem(user_id,product_details_id, quantity);

    res.status(201).json({message:"item added successfully"})

};

const deleteItemController = async (req,res) => {
    const {user_id, product_details_id} = req.body;
    await deleteCartItem(user_id, product_details_id); 

    res.status(201).json({message:"item deleted successfully"})

};

const updateItemController = async (req, res) => {
    const {user_id,product_details_id, quantity} = req.body; 
    await updateCartItem(user_id, product_details_id,  quantity);

    res.status(201).json({message:"item updated successfully"})
};


module.exports = {cartItemController, addCartItemController, deleteItemController, updateItemController};