CREATE TABLE `product_details` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `color_id` int NOT NULL,
  `size_id` int NOT NULL,
  `stock` int NOT NULL,
  FOREIGN KEY fk_product_details_product_id_products_id (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  FOREIGN KEY fk_product_details_color_id_color_id (`color_id`) REFERENCES `color` (`id`) ON DELETE CASCADE,
  FOREIGN KEY fk_product_details_size_id_size_id (`size_id`) REFERENCES `size` (`id`) ON DELETE CASCADE