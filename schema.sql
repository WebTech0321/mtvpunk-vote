CREATE DATABASE IF NOT EXISTS mtvpunks;

CREATE TABLE users (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(80) NOT NULL,
  `nonce` VARCHAR(80) NULL,
  `date_joined` TIMESTAMP DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8;

CREATE TABLE proposals (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_id` INT(11) NOT NULL,
  `name` VARCHAR(200) NOT NULL,
  `description` text NOT NULL,
  `status` TINYINT NULL DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT current_timestamp(),
  `finished_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8;

ALTER TABLE proposals AUTO_INCREMENT = 0;

CREATE TABLE votes (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_id` INT(11) NOT NULL,
  `proposal_id` INT(11) NOT NULL,
  `vote` TINYINT NULL DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT current_timestamp(),
  PRIMARY KEY (id),
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  FOREIGN KEY (`proposal_id`) REFERENCES `proposals` (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8;