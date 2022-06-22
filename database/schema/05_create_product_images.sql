CREATE TABLE `product_images` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `url` varchar(300) NOT NULL,
  `color_id` int NOT NULL,
  FOREIGN KEY fk_product_images_color_id_color_id (`color_id`) REFERENCES `color` (`id`) ON DELETE CASCADE;
);