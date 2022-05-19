DROP DATABASE IF EXISTS skillbuild_db;
<<<<<<< HEAD
<<<<<<< HEAD
CREATE DATABASE skillbuild_db;
=======
CREATE DATABASE skillbuild_db;

USE skillbuild_db;

CREATE TABLE user (
   id INT AUTO_INCREMENT NOT NULL ,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  user_password VARCHAR(150) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE company (
   id INT NOT NULL AUTO_INCREMENT,
  company_name VARCHAR(45) NOT NULL,
  service_description VARCHAR(100) NOT NULL,
  email VARCHAR(45) NOT NULL,
  department_id VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
);
>>>>>>> AishaK
=======
CREATE DATABASE skillbuild_db;
>>>>>>> 39aab6f8d3630f0a638e5fcdeaba139801bfc679
