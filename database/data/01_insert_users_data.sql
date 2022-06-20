CREATE TABLE users (
id int NOT NULL PRIMARY KEY AUTO_INCREMENT ,
email NOT NULL UNIQUE varchar(100),
password NOT NULL varchar(100),
name NOT NULL varchar(50),
address varchar(100),
created_at DATETIME DEFAULT NOW()
);