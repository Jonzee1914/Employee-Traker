let inquirer = require("inquirer");
const mysql = require('mysql2');

const db_config = require("../db/connection");

let updateEmployeeRoleInquiry = (cli, employees, roles) => {

  let employeeNames = [];

  (function(){
    employees.forEach((employee) =>{
      employeeNames.push(employee.fullName);
    })
  }());

  let roleTitles = [];

  (function(){
    roles.forEach((roles) =>{
      roleTitles.push(roles.title);
    })
  }());

  inquirer.prompt([{
    type:"list",
    name: 'employee',
    message: 'Which employees role would you like to change?',
    choices: employeeNames,
  },
  {
    type:"list",
    name: 'role',
    message: 'Which role would you like them to have?',
    choices: roleTitles,
  }])
  .then((answers) =>{

    // Returns the roleID
    function roleSearch(roleKey, myArray){
      for (var i=0; i < myArray.length; i++) {
          if (myArray[i].title === roleKey) {
                return myArray[i];
              }
          }
      }
    let rolesId = roleSearch(answers.role, roles);

    // Returns the employeeID
    function employeeSearch(employeeKey, myArray){
      for (var i=0; i < myArray.length; i++) {
          if (myArray[i].fullName === employeeKey) {
                return myArray[i];
              }
          }
      }
      let employeeInfo = employeeSearch(answers.employee, employees);
      let connection = mysql.createConnection(db_config);

      connection.query(`
      UPDATE employee 
      SET roleID = ${rolesId.id} 
      WHERE firstName = '${employeeInfo.firstName}' AND lastName = '${employeeInfo.lastName}'`, (err, res) => {
        if (err) throw err
      });

      connection.end();
      cli();
}); 

}
// Returns a list of all the roles to choose from to update the employee
let getRoles = (cli, employees) =>{
  let roles = [];
  let connection = mysql.createConnection(db_config);
  connection.query(`
  SELECT * FROM role;`,
    (err, res) => {
      res.forEach((role) => {
        roles.push ({
          "id": role.id,
          "title": role.title
        }
          );
        });
        connection.end();
        updateEmployeeRoleInquiry(cli, employees, roles);  
      });  
}

// Gets employee table to udpate
let getEmployees = (cli) =>{
  let employees = [];
  let connection = mysql.createConnection(db_config);
  connection.query(`
  SELECT id, firstName, lastName, CONCAT(firstName, ' ', lastName) AS fullName FROM employee;;`,
    (err, res) => {
      res.forEach((employee) => {
        employees.push ({
          "id": employee.id,
          "firstName": employee.firstName,
          "lastName": employee.lastName,
          "fullName": employee.fullName
        }
          );
        });
        connection.end();
        getRoles(cli,employees);  
      });  
}

let updateEmployeeRole = (cli) => {
  getEmployees(cli)
}


module.exports = updateEmployeeRole;