CREATE TABLE `products` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT ,
  `name` varchar(200) NOT NULL UNIQUE,
  `price` int DEFAULT 0,
  `sales_count_id` int,
  `category_id` int NOT NULL,
  `description` varchar(300),
  `made_in` varchar(200),
  `created_at` DATETIME DEFAULT NOW(),
  FOREIGN KEY fk_products_category_id_category_id (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE,
  FOREIGN KEY fk_products_sales_count_id_sales_count_id (`sales_count_id`) REFERENCES `sales_count` (`id`) ON DELETE CASCADE;
);