CREATE TABLE `product_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_color_id` int NOT NULL,
  `size_id` int NOT NULL,
  `stock` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_details_product_color_id_product_color_id` (`product_color_id`),
  KEY `fk_product_details_size_id_size_id` (`size_id`),
  CONSTRAINT `product_details_ibfk_1` FOREIGN KEY (`product_color_id`) REFERENCES `product_color` (`id`),
  CONSTRAINT `product_details_ibfk_2` FOREIGN KEY (`size_id`) REFERENCES `size` (`id`)
);