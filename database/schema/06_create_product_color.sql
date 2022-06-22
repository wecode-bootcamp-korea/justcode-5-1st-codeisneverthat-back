CREATE TABLE `product_color` (
  `id` int NOT NULL AUTO_INCREMENT,
  `color_id` int NOT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_color_color_id_color_id` (`color_id`),
  KEY `fk_product_product_id_products_id` (`product_id`),
  CONSTRAINT `product_color_ibfk_1` FOREIGN KEY (`color_id`) REFERENCES `color` (`id`),
  CONSTRAINT `product_color_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
);