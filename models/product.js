const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//Top 20 리스트
async function readTop20() {
  const top20 = await prisma.$queryRaw`
        SELECT p.id, p.name AS productName, cg.category, JSON_ARRAYAGG(JSON_OBJECT("id", pa.id, "color", JSON_OBJECT("id", pa.color_id, "color", pa.color), "images", pa.images)) AS colorImage, p.sales_count
        FROM (
            SELECT pc.id, product_id, pc.color_id, pi.images, c.color
            FROM product_color pc
            JOIN color c on pc.color_id = c.id
            JOIN (
                SELECT product_color_id AS id, JSON_ARRAYAGG(JSON_OBJECT("id",product_images.id, "url", product_images.url)) AS images
                FROM product_images WHERE MOD(id,2) = 1
                GROUP BY product_color_id
                ) pi on pi.id = pc.id
            ) pa
        JOIN products p ON p.id = pa.product_id
        JOIN category cg ON cg.id = p.category_id
        GROUP BY product_id, sales_count
        ORDER BY sales_count DESC limit 20
        `;
  return top20;
}

async function readProductDetails(id) {
  const productDetails = await prisma.$queryRaw`
    `;
  return productDetails;
}

module.exports = {
  readTop20,
  readProductDetails,
};
