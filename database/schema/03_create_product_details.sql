CREATE TABLE `product_details` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `product_color_id` int NOT NULL,
  `product_size_stock_id` int NOT NULL,
  FOREIGN KEY fk_product_details_product_id (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;
);