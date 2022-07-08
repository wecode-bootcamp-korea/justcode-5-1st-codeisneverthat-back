const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getCartItemsById(user_id) {
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
        where user_id=${user_id}
    `;
  return cart;
}

async function checkUserProductDetail({ user_id, product_details_id }) {
  return await prisma.$queryRaw`
        SELECT
            id,
            quantity
        FROM cart
            WHERE user_id = ${user_id} AND product_details_id = ${product_details_id}
    `;
}

async function updateQuantity({ cartId, currentQuantity }) {
  return await prisma.$queryRaw`
    UPDATE cart
    SET 
    quantity = ${currentQuantity}
    WHERE cart.id = ${cartId}
`;
}

async function addItem(addItemDto) {
  const { user_id, product_details_id, quantity } = addItemDto;

  await prisma.$queryRaw`
        INSERT INTO cart (user_id, product_details_id, quantity)
        VALUES (${user_id}, ${product_details_id}, ${quantity});
    `;
}

async function deleteItem(cartId) {
  await prisma.$queryRaw`
        DELETE FROM cart 
        WHERE cart.id = ${cartId}
    `;
}

async function updateItem(updateItemDto) {
  const { cartId, quantity } = updateItemDto;
  await prisma.$queryRaw`
        UPDATE 
            cart
        SET
            quantity = ${quantity}
        WHERE cart.id =${cartId}; 
    `;
}

module.exports = {
  getCartItemsById,
  addItem,
  deleteItem,
  updateItem,
  checkUserProductDetail,
  updateQuantity,
};
