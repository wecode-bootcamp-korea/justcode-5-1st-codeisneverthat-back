CREATE TABLE `users` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  `address` varchar(100),
  `created_at` DATETIME DEFAULT NOW()
);