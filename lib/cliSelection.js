const inquirer = require('inquirer');

const viewEmployee = require("./viewEmployee.js");
const viewDept = require("./viewDept.js");
const viewRoles = require("./viewRoles.js");
const viewEmployeesByDept = require("./viewEmployeesByDept.js");
const viewEmployeesByManager = require("./viewEmployeesByMngr.js");
const addEmployee = require("./addEmployee.js");
const addDepartment = require("./addDept.js");
const addRole = require("./addRole.js");
const removeEmployee = require("./removeEmployee.js");
const updateEmployeeRole = require("./updateEmployeeRole.js");

let cliSelection = () => {
  inquirer.prompt({
    name: "employeesOptions",
    type: "list",
    message: "What would you like to do?",
    choices: ["Nothing --Exit", "View All Employees", "View All Employees By Department", "View All Employees By Manager", "View All Departments", "View All Roles",
    "Add Department", "Add Role", "Add Employee", "Remove Employee", "Update Employee Role"],
  }).then((answer) =>{
    if(answer.employeesOptions == "Nothing --Exit"){
      return process.exit(22);
    }else if(answer.employeesOptions == "View All Employees"){
      viewEmployee(cliSelection);
    }else if (answer.employeesOptions == "View All Employees By Department" ){
      viewEmployeesByDept(cliSelection);
    }else if(answer.employeesOptions == "View All Employees By Manager"){
      viewEmployeesByManager(cliSelection);
    }else if(answer.employeesOptions == "View All Departments"){
      viewDept(cliSelection);
    }else if(answer.employeesOptions == "View All Roles"){
      viewRoles(cliSelection);
    }else if(answer.employeesOptions == "Add Department"){
      addDepartment(cliSelection);
    }else if(answer.employeesOptions == "Add Role"){
      addRole(cliSelection);
    }else if(answer.employeesOptions == "Add Employee"){
      addEmployee(cliSelection);
    }else if(answer.employeesOptions == "Update Employee Role"){
      updateEmployeeRole(cliSelection);
    // }else if(answer.employeesOptions == "Update Employee Manager"){
    //   updateEmployeeManager(cliSelection);
    }else if(answer.employeesOptions == "Remove Employee"){
      removeEmployee(cliSelection);
    }
  });
}

module.exports = cliSelection;