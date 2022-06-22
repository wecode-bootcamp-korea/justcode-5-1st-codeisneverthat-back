CREATE TABLE `product_images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  `product_color_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_images_product_color_id_product_color_id` (`product_color_id`),
  CONSTRAINT `product_images_ibfk_1` FOREIGN KEY (`product_color_id`) REFERENCES `product_color` (`id`)
);