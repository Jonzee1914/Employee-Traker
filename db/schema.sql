DROP DATABASE employeeTrackerDB;

CREATE DATABASE employeeTrackerDB;

USE employeeTrackerDB;

-- EMPLOYEES TABLE ======================================
CREATE TABLE employee (
    id int not null auto_increment,
    firstName varchar(30) not null,
    lastName varchar(30) not null,
    roleID int,
    managerID int,
    -- foreign key (role_id) references role(role_id)
    primary key(id)
);

-- ROLE TABLE ======================================
CREATE TABLE role (
    id int not null auto_increment,
    title varchar(30) not null,
    salary float not null,
    departmentID int,
    -- foreign key (department_id) references department(department_id)
    primary key(id)
);

-- DEPARTMENT TABLE ======================================
CREATE TABLE department (
    id int not null auto_increment,
    name varchar(30) not null,
    primary key(id)
)