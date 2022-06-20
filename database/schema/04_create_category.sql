CREATE TABLE category (
id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
name NOT NULL varchar(255),
FOREIGN KEY fk_category_id_products_category_id (id) REFERENCES products (category_id) ON DELETE CASCADE;
);