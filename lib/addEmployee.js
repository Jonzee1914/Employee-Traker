let inquirer = require("inquirer");
const mysql = require('mysql2');

const db_config = require("../db/connection");

//Get employee roles
let employeeInquiry = (cli, roles, employees) => {

  let roleTitles = [];

  (function(){
    roles.forEach((role) =>{
      roleTitles.push(role.title);
    })
  }());

  let employeeNames = ['None'];

  (function(){
    employees.forEach((person) =>{
      employeeNames.push(person.fullName);
    })
  }());
  
  inquirer.prompt([{
    type:"input",
    name:"firstName",
    message:"What is the employees first name?",
  },
  {
    type:"input",
    name:"lastName",
    message:"What is the employees last name?",
  },
  {
    type:"list",
    name: 'role',
    message: 'What is the employees role?',
    choices: roleTitles,
  },
  {
    type:"list",
    name: 'fullName',
    message: 'Who is the employees manager?',
    choices: employeeNames,
  }])
  .then((answers) =>{

    // Returns employeeID for role text
    function roleSearch(roleKey, myArray){
      for (var i=0; i < myArray.length; i++) {
          if (myArray[i].title === roleKey) {
                return myArray[i];
              }
          }
      }
    let rolesId = roleSearch(answers.role, roles);
    
    //Returns the employeeID that matches fullName
    function employeeSearch(managerKey, myArray){
      for (var i=0; i < myArray.length; i++) {
        if (myArray[i].fullName === managerKey) {
                return myArray[i];
              }
          }
      }

      let employeeId;
      // Null included if there is no manager
      if (answers.fullName === "None"){
        employeeId = {'id': null}
      }else{
        employeeId = employeeSearch(answers.fullName, employees);
      }

    let connection = mysql.createConnection(db_config);
    // Inserts the employee into the database.
    connection.query(`INSERT INTO employee (firstName, lastName, roleID, managerID ) VALUES ('${answers.firstName}', '${answers.lastName}', ${rolesId.id}, ${employeeId.id})`, (err, res) => {
      if (err) throw err
    }); 
    connection.end();
    cli();
  });


}

// Query to employee info
let getEmployees = (cli, roles) =>{
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
        employeeInquiry(cli, roles, employees);   
      });  
}

// Query to pass role
let getRoles = (cli) =>{
  let connection = mysql.createConnection(db_config);
  let roles = [];
  connection.query(`
    SELECT * from role;`,
    (err, res) => {
      
      res.forEach((role) => {
        roles.push ({
          "title": role.title,
          "id": role.id
        }
          );
        });
        connection.end();
        getEmployees(cli,roles);  
      });  
}


let addEmployee = (cli) => {
  getRoles(cli);
}

module.exports = addEmployee;