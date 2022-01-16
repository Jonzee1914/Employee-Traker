let inquirer = require("inquirer");
const mysql = require('mysql2');

const db_config = require("../db/connection");

let roleInquiry = (cli, roles) => {

  inquirer.prompt([{
    type:"input",
    name:"title",
    message:"What is the role you wish to add?",
  },
  {
    type:"input",
    name:"salary",
    message:"What is the salary of the role?",
  },
  {
    type:"list",
    name:"role_department",
    message:"What department does the role belong too?",
    choices: roles,
  }])
  .then((answers) =>{

     //Returns the roleID for role selected
    function roleSearch(roleKey, myArray){
      for (var i=0; i < myArray.length; i++) {
          if (myArray[i].name === roleKey) {
                return myArray[i];
              }
          }
      }
      let rolesId = roleSearch(answers.role_department, roles);
      let connection = mysql.createConnection(db_config);

  connection.query(`INSERT INTO role (title, salary, departmentID ) VALUES ('${answers.title}', ${parseInt(answers.salary)}, ${parseInt(rolesId.departmentID)} )`, (err, res) => {
    if (err) throw err
  }); 
  
  connection.end();
  cli();
  });
}

// Make mysql call to grab department information
let getDepartments = (cli) =>{
  let roles = [];
  let connection = mysql.createConnection(db_config);
  connection.query(`
  SELECT DISTINCT department.id as departmentID, name FROM role
  RIGHT JOIN department on role.departmentID = department.id;`,
    (err, res) => {
      res.forEach((role) => {
        roles.push ({
          "departmentID": role.departmentID,
          "name": role.name
        }
          );
        });
        connection.end();
        roleInquiry(cli,roles);  
      });  
}

let addRole = (cli) => {
  getDepartments(cli);
}

module.exports = addRole;