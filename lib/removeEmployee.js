let inquirer = require("inquirer");
const mysql = require('mysql2');

const db_config = require("../db/connection");


let employeeInquiry = (cli, employeeInfo) => {
  let employeeNames = [];

  (function(){
    employeeInfo.forEach((employeeName) =>{
      employeeNames.push(employeeName.employee);
    })
  }());

  
  inquirer.prompt([{
    type:"list",
    name: 'employeeName',
    message: 'Which employee do you wish to remove?',
    choices: employeeNames,
  }])
  .then((answers) =>{
    // Finds selected employee for the Id
    function employeeSearch(employeeKey, myArray){
      for (var i=0; i < myArray.length; i++) {
          if (myArray[i].employee === employeeKey) {
                return myArray[i];
              }
          }
      }
    let employeeId = employeeSearch(answers.employeeName, employeeInfo);
    let connection = mysql.createConnection(db_config);
    connection.query(`DELETE FROM employee WHERE id = ${employeeId.id} ;`, (err, res) => {
      if (err) throw err
    }); 
    connection.end();
    cli();
  });
}

// Query to pass employee info
let getEmployees = (cli) =>{
  let employeeInfo = [];
  let connection = mysql.createConnection(db_config);
  connection.query(`
  SELECT id, CONCAT(firstName, ' ',lastName) AS employee FROM employee;`,
    (err, res) => {
      res.forEach((employee) => {
        employeeInfo.push ({
          "id":employee.id,
          "employee": employee.employee
        }
          );
        });
        connection.end();
        employeeInquiry(cli, employeeInfo);  
      });  
}


let removeEmployee = (cli) => {
  getEmployees(cli);
}

module.exports = removeEmployee;