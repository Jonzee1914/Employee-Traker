const inquirer = require('inquirer');

const viewEmployee = require("./viewEmployee");
const viewDept = require("./viewDept");
// const viewBudget = require("./viewBudget")
const viewRoles = require("./viewRoles");
const viewEmployeesByDept = require("./viewEmployeesByDept");
const viewEmployeesByManager = require("./viewEmployeesByMngr");
const addEmployee = require("./addEmployee");
const addDepartment = require("./addDept");
const addRole = require("./addRole");
const removeEmployee = require("./removeEmployee");
const updateEmployeeRole = require("./updateEmployeeRole");
// const updateEmployeeManager = require("./updateEmployeeManager");

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
    // }else if(answer.employeesOptions == "View Utilized Department Budgets"){
    //   viewBudget(cliSelection);
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