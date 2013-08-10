CREATE TABLE `users`(
	`username` VARCHAR(30),
	`password` VARCHAR(64),
	PRIMARY KEY(`username`)
);

CREATE TABLE `news`(
	`id` INT(10) AUTO_INCREMENT,
	`message` TEXT,	
	`time` TIMESTAMP,
	PRIMARY KEY(`id`)
);