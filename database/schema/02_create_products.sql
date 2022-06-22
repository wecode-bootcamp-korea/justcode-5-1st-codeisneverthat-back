CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `price` int DEFAULT '0',
  `sales_count_id` int DEFAULT NULL,
  `category_id` int NOT NULL,
  `description` varchar(300) DEFAULT NULL,
  `made_in` varchar(200) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `fk_products_category_id_category_id` (`category_id`),
  KEY `fk_products_sales_count_id_sales_count_id` (`sales_count_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE,
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`sales_count_id`) REFERENCES `sales_count` (`id`) ON DELETE CASCADE
);