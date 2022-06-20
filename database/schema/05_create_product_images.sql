CREATE TABLE product_images (
id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
img_url NOT NULL varchar(255),
FOREIGN KEY fk_product_images_id_product_details_product_images_id (id) REFERENCES product_details (product_images_id) ON DELETE CASCADE;
);