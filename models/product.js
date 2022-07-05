const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//Top 20 리스트 가져오기 + 컬러별 대표 이미지
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

//제품 상세 정보 불러오기
async function readProductDetails(id) {
  const productDetails = await prisma.$queryRaw`
    SELECT
      p.id AS productId,
      p.name AS productName,
      p.price,
      p.made_in,
      p.description,
      cg.category,
      pa.colorImage,
      piJA.stockBySize
    FROM (
        SELECT pc.product_id, JSON_ARRAYAGG(JSON_OBJECT("id", pc.id, "color", JSON_OBJECT("id", pc.color_id, "color", c.color), "images", pi.images)) AS colorImage
        FROM product_color pc
        JOIN color c on pc.color_id = c.id
        JOIN (
            SELECT product_color_id AS id, JSON_ARRAYAGG(JSON_OBJECT("id",product_images.id, "url", product_images.url)) AS images
            FROM product_images
            GROUP BY product_color_id
            ) pi on pi.id = pc.id
        GROUP BY pc.product_id
        ) pa
    JOIN products p ON p.id = pa.product_id
    JOIN category cg ON cg.id = p.category_id
    JOIN product_color pc2 on p.id = pc2.product_id
    JOIN color cc ON pc2.color_id = cc.id
    JOIN product_details pd ON pd.product_color_id = pc2.id
    JOIN (SELECT pcc.product_id, JSON_ARRAYAGG(JSON_OBJECT("id", pcc.id, "color", JSON_OBJECT("id", pcc.color_id, "color", ccc.color),"size_stock", ss.size_stock)) AS stockBySize
        FROM product_color pcc
        JOIN (SELECT product_color_id, JSON_ARRAYAGG(JSON_OBJECT("size", s.size, "stock", product_details.stock, "product_details_id", product_details.id)) AS size_stock
            FROM product_details
            JOIN size s on product_details.size_id = s.id
            GROUP BY product_details.product_color_id) ss ON ss.product_color_id = pcc.id
        JOIN color ccc on ccc.id = pcc.color_id
        GROUP BY pcc.product_id) piJA on piJA.product_id = p.id
    GROUP BY pa.product_id
    HAVING pa.product_id = ${id};
    `;
  return productDetails;
}

async function readCollectionListByCategory(category) {
  const collectionListByCategory = await prisma.$queryRawUnsafe(`
  SELECT
      p.id AS productId,
      p.name AS productName,
      p.price,
      cg.category AS categoryName,
      pa.colorImage,
      piJA.stockBySize
  FROM (
      SELECT pc.product_id, JSON_ARRAYAGG(JSON_OBJECT("id", pc.id, "color", JSON_OBJECT("id", pc.color_id, "color", c.color), "images", pi.images)) AS colorImage
      FROM product_color pc
      JOIN color c on pc.color_id = c.id
      JOIN (
          SELECT product_color_id AS id, JSON_ARRAYAGG(JSON_OBJECT("id",product_images.id, "url", product_images.url)) AS images
          FROM product_images WHERE MOD(id,2) = 1
          GROUP BY product_color_id
          ) pi on pi.id = pc.id
      GROUP BY pc.product_id
      ) pa
  JOIN products p ON p.id = pa.product_id
  JOIN category cg ON cg.id = p.category_id
  JOIN product_color pc2 on p.id = pc2.product_id
  JOIN color cc ON pc2.color_id = cc.id
  JOIN product_details pd ON pd.product_color_id = pc2.id
  JOIN (SELECT pcc.product_id, JSON_ARRAYAGG(JSON_OBJECT("id", pcc.id, "color", JSON_OBJECT("id", pcc.color_id, "color", ccc.color),"size_stock", ss.size_stock)) AS stockBySize
      FROM product_color pcc
      JOIN (SELECT product_color_id, JSON_ARRAYAGG(JSON_OBJECT("size", s.size, "stock", product_details.stock)) AS size_stock
          FROM product_details
          JOIN size s on product_details.size_id = s.id
          GROUP BY product_details.product_color_id) ss ON ss.product_color_id = pcc.id
      JOIN color ccc on ccc.id = pcc.color_id
      GROUP BY pcc.product_id) piJA on piJA.product_id = p.id
  GROUP BY pa.product_id
  ${category ? `HAVING categoryName = '${category}'` : ``}
  `);
  return collectionListByCategory;
}

module.exports = {
  readTop20,
  readProductDetails,
  readCollectionListByCategory,
};
