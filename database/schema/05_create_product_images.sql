CREATE TABLE `product_images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(300) NOT NULL,
  `color_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_images_color_id_color_id` (`color_id`),
  CONSTRAINT `product_images_ibfk_1` FOREIGN KEY (`color_id`) REFERENCES `color` (`id`) ON DELETE CASCADE
);