const {getCartItem, addCartItem}= require ('../services/cart');

const cartItemController =(req,res) => {
    const {userId} = req.body;
    const cartItems = await getCartItem(userId);

    res.json({data: cartItems})


};

const addCartItemController =(req,res)=>{
    const {userId,productDetails } = req.body; 
    await addCartItem(userId, productDetails);

    res.status(201).json({message:"item added successfully"})

};


module.exports = {cartItemController, addCartItemController};