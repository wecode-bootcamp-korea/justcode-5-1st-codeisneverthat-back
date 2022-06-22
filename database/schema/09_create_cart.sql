CREATE TABLE `cart` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `product_details_id` int,
  `quantity` int,
  FOREIGN KEY fk_cart_user_id_users_id (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  FOREIGN KEY fk_cart_product_details_id_product_details_id (`product_details_id`) REFERENCES `product_details` (`id`) ON DELETE CASCADE
);