const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getCartById(user_id) {
  const cart = prisma.$queryRaw`
        SELECT
            cart.id,
            p.name,
            p.price,
            color.color,
            size.size,
            pi.url,
            cart.quantity,
            cart.product_details_id
        FROM cart
            JOIN product_details AS pd ON cart.product_details_id = pd.id
            JOIN product_color AS pc ON pd.product_color_id = pc.id
            JOIN products AS p on pc.product_id = p.id
            JOIN color on pc.color_id = color.id
            JOIN size on pd.size_id = size.id
            JOIN (
                SELECT *
                FROM product_images
                WHERE MOD(product_images.id, 2) = 1
            ) AS pi on pi.product_color_id = pc.id
        where user_id=${user_id.id}
    `;
  return cart;
}

async function addItem(addItemDto) {
  const { user_id, product_details_id, quantity } = addItemDto;

  await prisma.$queryRaw`
        INSERT INTO cart (user_id, product_details_id, quantity)
        VALUES (${user_id}, ${product_details_id}, ${quantity});
    `;
}

async function deleteItem(deleteItemDto) {
  const { user_id, product_details_id } = deleteItemDto;

  await prisma.$queryRaw`
        DELETE FROM CART 
        WHERE ${user_id} = cart.user_id AND ${product_details_id} = cart.product_details_id; 
    `;
}

async function updateItem(updateItemDto) {
  const { user_id, product_details_id, quantity } = updateItemDto;
  await prisma.$queryRaw`
        UPDATE 
            cart
        SET
            quantity = ${quantity}
        WHERE ${user_id} = cart.user_id AND ${product_details_id} = cart.product_details_id; 
    `;
}

module.exports = { getCartById, addItem, deleteItem, updateItem };
