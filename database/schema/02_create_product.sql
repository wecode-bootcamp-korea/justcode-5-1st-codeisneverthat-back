CREATE TABLE products (
id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
name NOT NULL varchar(100),
price NOT NULL int DEFAULT 0,
description varchar(500),
made_in varchar(100),
created_at DATETIME DEFAULT NOW(),
category_id int,
product_details_id int
FOREIGN KEY fk_products_id_cart_products_id (id) REFERENCES cart (products_id) ON DELETE CASCADE;
);