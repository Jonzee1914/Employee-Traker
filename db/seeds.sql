-- DEPARTMENTS ==============================
-- id - INT PRIMARY KEY
-- name - VARCHAR(30) to hold department name

INSERT INTO department (id, name) VALUES (1, 'Engineering');
INSERT INTO department (id, name) VALUES (2, 'Sales');
INSERT INTO department (id, name) VALUES (3, 'Finance');
INSERT INTO department (id, name) VALUES (4, 'Legal');
INSERT INTO department (id, name) VALUES (5, 'Operations');
INSERT INTO department (id, name) VALUES (6, 'Human Rescources');

-- ROLES ==============================
-- id - INT PRIMARY KEY
-- title - VARCHAR(30) to hold role title
-- salary - DECIMAL to hold role salary
-- department_id - INT to hold reference to department role belongs to employee:

INSERT INTO role (title, salary, departmentID) VALUES ("Lead Engineer", 150000, 1);
INSERT INTO role (title, salary, departmentID) VALUES ("Engineer", 125000, 1);

INSERT INTO role (title, salary, departmentID) VALUES ("Sales Mgr.", 138500, 2);
INSERT INTO role (title, salary, departmentID) VALUES ("Online Sales Rep.", 130000, 2);
INSERT INTO role (title, salary, departmentID) VALUES ("Print Sales Rep.", 125000, 2);

INSERT INTO role (title, salary, departmentID) VALUES ("Comptroller", 169000, 3);
INSERT INTO role (title, salary, departmentID) VALUES ("Accountant", 138000, 3);
INSERT INTO role (title, salary, departmentID) VALUES ("Billing Coordinator", 122000, 3);

INSERT INTO role (title, salary, departmentID) VALUES ("Lawyer", 165000, 4);

INSERT INTO role (title, salary, departmentID) VALUES ("Operations Mgr.", 145000, 5);
INSERT INTO role (title, salary, departmentID) VALUES ("Ops Specialist", 110000, 5);

INSERT INTO role (title, salary, departmentID) VALUES ("HR Manager", 165000, 6);
INSERT INTO role (title, salary, departmentID) VALUES ("HR Coordinator", 120000, 6);

-- EMPLOYEES =========================================
-- id - INT PRIMARY KEY
-- first_name - VARCHAR(30) to hold employee first name
-- last_name - VARCHAR(30) to hold employee last name
-- role_id - INT to hold reference to role employee has
-- manager_id - INT to hold reference to another employee that manager of the current employee.
                -- This field may be null if the employee has no manager.

-- Seed Employees Info =================================================================================
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Tony', 'Stark',1, null );
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Peter', 'Parker', 2, 1);
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Reed', 'Richards', 2, 1);
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Nick', 'Fury', 3, null);
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Maria', 'Hill', 4, 3);
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Phil', 'Coulson',5, 3);
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Steve', 'Rogers', 6, null);
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Clint', 'Barton', 7, 6);
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Natasha', 'Romanoff', 7, 6);
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Sonny', 'Rollins', 8, 6);
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Matt', 'Murdock', 9, null);
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Charles', 'Xavier', 10, null);
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Scott', 'Summers', 11, 1);
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Jean', 'Grey', 11, 1);
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Hank', 'Pym', 12, null);
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Hope', 'Pym', 13, null);
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Scott', 'Lang', 13, null);