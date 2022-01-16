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
    -- foreign key (roleID) references role(roleID)
    primary key(id)
);

-- ROLE TABLE ======================================
CREATE TABLE role (
    id int not null auto_increment,
    title varchar(30) not null,
    salary float not null,
    departmentID int,
    -- foreign key (departmentID) references department(departmentID)
    primary key(id)
);

-- DEPARTMENT TABLE ======================================
CREATE TABLE department (
    id int not null auto_increment,
    name varchar(30) not null,
    primary key(id)
)