require("dotenv").config();
const pool = require("./pool");
const inquirer = require("inquirer");
const {
  viewAllDepartments,
  viewEmployeesManager,
  viewEmployeesDepartment,
  viewAllRoles,
  viewAllEmployees,
  addDepartment,
  addRole,
  updateEmployeeRole,
  addEmployee,
  deleteDepartment,
  deleteRoles,
  deleteEmployees,
} = require("./queries");

const menuQuestions = async () => {
  const action = await inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "View employees by manager",
      "View employees by deparment",
      "Update an employee role",
      "Add an employee",
      "Add a department",
      "Add a role",
      "Delete department",
      "Delete roles",
      "Delete employees",
      "Exit",
    ],
  });

  switch (action.action) {
    case "View all departments":
      await viewAllDepartments();
      break;
    case "View all roles":
      await viewAllRoles();
      break;
    case "View all employees":
      await viewAllEmployees();
      break;
    case "View employees by manager":
      await viewEmployeesManager();
      break;
    case "View employees by deparment":
      await viewEmployeesDepartment();
      break;
    case "Update an employee role":
      await updateEmployeeRole();
      break;
    case "Add an employee":
      await addEmployee();
      break;
    case "Add a department":
      await addDepartment();
      break;
    case "Add a role":
      await addRole();
      break;
    case "Delete department":
      await deleteDepartment();
      break;
    case "Delete roles":
      await deleteRoles();
      break;
    case "Delete employees":
      await deleteEmployees();
      break;
    case "Exit":
      pool.end();
      process.exit();
  }

  menuQuestions();
};

menuQuestions();

// QUESTIONS:
// View all departments
// View all roles
// View all employees
// Add a department
// Add a role
// Add an employee
// Update an employee role
// View employees by manager
// View employees by deparment
// Delete deparment, roles and employees
// View the total utilized budget of a department, the combined salaries of all employees in that department
