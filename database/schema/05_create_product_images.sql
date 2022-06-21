CREATE TABLE `product_images` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `url` varchar(300) NOT NULL,
  `product_color_id` int NOT NULL,
  FOREIGN KEY fk_product_images_product_color_id_product_color_id (`product_color_id`) REFERENCES `product_color` (`id`) ON DELETE CASCADE;
);