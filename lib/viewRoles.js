const mysql = require('mysql2');
const cTable = require('console.table');

const db_config = require("../db/connection");

// Queries and console logs roles
let viewRoles = (cli) => {
  let connection = mysql.createConnection(db_config);
  connection.query(`
  SELECT id, title, salary, departmentID FROM role;`
  ,
  (err, res) => {
    let roleTable = [];
    res.forEach((role) => {
      roleTable.push (
        {'id': role.id, 
         'title' : role.title,
         'salary' : role.salary,
         'lastName': role.lastName, 
         'departmentID': role.department_id, 
        });
    });

     console.table(
        roleTable
      ); 
      connection.end();
      cli();
  }); 

}

module.exports = viewRoles;