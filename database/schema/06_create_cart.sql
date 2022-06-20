CREATE TABLE cart (
id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
users_id int NOT NULL,
products_id int NOT NULL,
quantity int NOT NULL,
FOREIGN KEY fk_cart_users_id_users_id (id) REFERENCES users (id) ON DELETE CASCADE;
);