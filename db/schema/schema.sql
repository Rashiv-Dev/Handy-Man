DROP DATABASE IF EXISTS handy_man;
CREATE database handy_man;

USE handy_man;


CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(45) NULL,
   last_name VARCHAR(45) NULL,
  user_password PASSWORD(45) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE company (
   id INT NOT NULL AUTO_INCREMENT,
  company_name VARCHAR(45) NULL,
  service_offered VARCHAR(45) NULL,
  contact_info VARCHAR(45) NULL
  department_id VARCHAR(45) NULL,
  PRIMARY KEY (id)
);