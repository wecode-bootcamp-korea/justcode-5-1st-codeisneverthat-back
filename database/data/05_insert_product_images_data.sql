CREATE TABLE `product_images` (
`id` int PRIMARY KEY AUTO_INCREMENT,
`img_url` varchar(255),
FOREIGN KEY (`id`) REFERENCES `cart` (`products_id`);
);