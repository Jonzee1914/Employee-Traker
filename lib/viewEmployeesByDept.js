const mysql = require('mysql2');
const cTable = require('console.table');

const db_config = require("../db/connection");

let viewEmployeesByDept = (cli) => {
   // Grabs the list of employees by department in ascending order, then console logs the information.
  let connection = mysql.createConnection(db_config);
  connection.query(`
  SELECT e1.id, e1.firstName, e1.lastName, role.title, department.name AS department, role.salary, CONCAT(e2.firstName, ' ', e2.lastName) AS manager FROM employee as e1
  LEFT JOIN role on e1.roleID = role.id
  LEFT JOIN department on role.departmentID = department.id
  LEFT JOIN employee as e2 on e2.id = e1.managerID
  ORDER BY department ASC;`
  ,
  (err, res) => {
    let employeeTable = [];
    res.forEach((employee) => {
      employeeTable.push (
        {'department': employee.department, 
         'id': employee.id, 
         'firstName' : employee.firstName, 
         'lastName': employee.lastName, 
         'title': employee.title, 
         'salary': employee.salary, 
         'manager' : employee.manager
        });
    });

     console.table(
        employeeTable
      ); 
      connection.end();
      cli();
  }); 



}

module.exports = viewEmployeesByDept;