CREATE DATABASE IF NOT EXISTS normalization;
USE normalization;

CREATE TABLE `employees`(
    `employees_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `employees_first_name` VARCHAR(100) NOT NULL,
    `employees_last_name` VARCHAR(100) NOT NULL,
    `departament_id` INT NOT NULL,
    `contact_id` INT NOT NULL,
    foreign key (contact_id) references contact(contact_id),
    foreign key (departament_id) references departament(departament_id)
) engine=InnoDB;

INSERT INTO employees(employees_id, employees_first_name, employees_last_name) 
VALUES(12, 'Joseph', 'Rodrigues');
    (13, 'André', 'Freeman');
    (14, 'Cíntia', 'Duval');
    (15, 'Fernanda', 'Mendes');


CREATE TABLE `contact`(
    `contact_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `employees_id` INT NOT NULL,
    `contact_email` VARCHAR(100) NOT NULL,
    `contact_phone` INT NOT NULL,
    `contact_ddd` INT NOT NULL,
    foreign key (employees_id) references employees(employees_id)
) engine=InnoDB;

INSERT INTO contact(employees_id, contact_email, contact_phone, contact_ddd) 
VALUES(12, 'jo@gmail.com', '998552-1445', '35');
    (13, 'andre1990@gmail.com', '99522-4996', '47');
    (14, 'cindy@outlook.com', '99855-4669', '33');
    (15, 'fernandamendes@yahoo.com', '99200-1556', '33');


CREATE TABLE `departament`(
    `departament_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `departament_name` VARCHAR(255) NOT NULL,
    foreign key (employees_id) references employees(employees_id)
) engine=InnoDB;

INSERT INTO departament(departament_id, departament_name) 
VALUES(1, 'Administração');
    (2, 'Vendas');
    (3, 'Operacional');
    (4, 'Estratégico');
    (5, 'Marketing');
