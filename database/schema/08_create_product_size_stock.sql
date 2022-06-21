CREATE TABLE `product_size_stock` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `size` varchar(50) NOT NULL,
  `stock` int NOT NULL,
  FOREIGN KEY fk_product_size_stock_id_product_details_product_size_stock_id (`id`) REFERENCES `product_details` (`product_size_stock_id`) ON DELETE CASCADE;
);