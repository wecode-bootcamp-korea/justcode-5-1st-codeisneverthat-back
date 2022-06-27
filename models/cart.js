const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


    async function getCartById(user_id) {
        const  cart  = prisma.$queryRaw`
     SELECT 
         products.name,
         product_images.url,
         products.price,
         cart.quantity,
         color.color,
         size.size
     FROM users INNER JOIN cart on ${user_id} = cart.user_id
             LEFT JOIN product_details on cart.product_details_id = product_details.id 
             LEFT JOIN size on product_details.size_id = size.id 
            LEFT JOIN product_color on product_details.product_color_id = product_color.id
            
            LEFT JOIN color on product_color.color_id = color.id
            LEFT JOIN products on product_color.product_id = products.id
            LEFT JOIN product_images on product_color.id = product_images.product_color_id
    WHERE MOD(product_images.id,2) = 0
     `;

   return cart;
}

async function addItem(addItemDto) {
    const {user_id, product_details_id, quantity} = addItemDto; 

    await prisma.$queryRaw`
        INSERT INTO cart (user_id, product_details_id, quantity)
        VALUES (${user_id}, ${product_details_id}, ${quantity});
    `;


}

module.exports = { getCartById, addItem };
