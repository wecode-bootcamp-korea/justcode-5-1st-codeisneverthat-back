CREATE TABLE `product_details` (
id int PRIMARY KEY AUTO_INCREMENT,
product_images_id int,
sales_rate int,
stock int,
size int,
created_at timestamp,
FOREIGN KEY fk_product_details_id_products_product_details_id (id) REFERENCES products (product_details_id) ON DELETE CASCADE;
);