CREATE TABLE `product_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `color_id` int DEFAULT NULL,
  `stock_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_details_color_id_color_id` (`color_id`),
  KEY `fk_product_details_stock_id_stock_id` (`stock_id`),
  KEY `fk_product_details_product_id_products_id` (`product_id`),
  CONSTRAINT `product_details_ibfk_1` FOREIGN KEY (`color_id`) REFERENCES `color` (`id`) ON DELETE CASCADE,
  CONSTRAINT `product_details_ibfk_2` FOREIGN KEY (`stock_id`) REFERENCES `stock` (`id`) ON DELETE CASCADE,
  CONSTRAINT `product_details_ibfk_3` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
);