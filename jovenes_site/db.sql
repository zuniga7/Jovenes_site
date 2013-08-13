CREATE TABLE `users`(
	`username` VARCHAR(30),
	`password` VARCHAR(65),
	PRIMARY KEY(`username`)
);

CREATE TABLE `news`(
	`id` INT(10) AUTO_INCREMENT,
	`title` VARCHAR(100),	
	`message` TEXT,	
	`time` TIMESTAMP,
	PRIMARY KEY(`id`)
);