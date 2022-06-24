const prisma = require('./prisma-client');

async function getCartById(userId) {

    const  {cart} = prisma.$queryRaw`
    SELECT 
        products.name,
        product_images.url,
        products.price,
        cart.quantity,
        color.color,
        size.size
    FROM cart LEFT JOIN product_details on cart.product_details_id = product_details.id 
            LEFT JOIN size on product_details.size_id = size.id 
            LEFT JOIN product_color on product_detail.product_color_id = product_color.id
            LEFT JOIN product_images on product_color.id = product_images.product_color_id
            LEFT JOIN color on product_color.color_id = color.id
            LEFT JOIN products on product_color.product_id = products.id
    `;

    return cart;

}

async function addItem(addItemDto ) {
    



}

module.exports ={getCartById, addItem};
