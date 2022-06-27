const { getCartById } = require('../models/cart');
const {addCartItem}= require ('../services/cart');

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


module.exports = {cartItemController, addCartItemController};