CREATE TABLE `product_color` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `color` varchar(50) NOT NULL,
  FOREIGN KEY fk_product_color_id_product_details_product_color_id (`id`) REFERENCES `product_details` (`product_color_id`) ON DELETE CASCADE;
);