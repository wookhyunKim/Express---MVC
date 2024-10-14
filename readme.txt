사용 방법

npm install express --save
npm install



mysql2 사용

db init 

CREATE DATABASE schema;
USE schema;

CREATE TABLE `schema`.`user` (
  `u_id` VARCHAR(30) NOT NULL,
  `u_password` VARCHAR(256) NOT NULL,
  `u_nickname` VARCHAR(45) NOT NULL,
  `u_reg_date` VARCHAR(45) NOT NULL,
  `u_delete_date` VARCHAR(45) DEFAULT NULL,
  `u_status` INT DEFAULT 0,
  PRIMARY KEY (`uid`));


  CREATE TABLE `schema`.`board` (
  `b_id` INT NOT NULL AUTO_INCREMENT,
  `b_u_id` VARCHAR(30) NOT NULL,
  `b_title` VARCHAR(30) NULL,
  `b_content` VARCHAR(45) NULL,
  `b_upload_date` VARCHAR(30) NULL,
  `b_status` INT DEFAULT 0,
  `b_comment` INT DEFAULT 0,
  PRIMARY KEY (`b_id`));


  CREATE TABLE `schema`.`comment` (
  `c_id` INT NOT NULL AUTO_INCREMENT,
  `c_b_id` INT NOT NULL,
  `c_u_id` VARCHAR(30) NULL,
  `c_write_date` VARCHAR(45) NULL,
  `c_content` VARCHAR(30) NULL,
  PRIMARY KEY (`c_id`));
