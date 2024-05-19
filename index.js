require("dotenv").config();
const inquirer = require("inquirer");
const { pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
});

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
      "Update employee manager",
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

  switch ( action ) {
    case "View all departments":
      await viewAllDepartments(pool);
      break;
    case "View all roles":
      await viewAllRoles(pool);
      break;
    case "View all employees":
      await viewAllEmployees(pool);
      break;
    case "View employees by manager":
      await viewEmployeesManager(pool);
      break;
    case "View employees by deparment":
      await viewEmployeesDepartment(pool);
      break;
    case "Update employee managers":
      await updateEmployeeManager(pool);
      break;
    case "Update an employee role":
      await updateEmployeeRole(pool);
      break;
    case "Add an employee":
      await addEmployee(pool);
      break;
    case "Add a department":
      await addDepartment(pool);
      break;
    case "Add a role":
      await addRole(pool);
      break;
    case "Delete department":
      await deleteDepartment(pool);
      break;
    case "Delete roles":
      await deleteRoles(pool);
      break;
    case "Delete employees":
      await deleteEmployees(pool);
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
// Update employee managers
// View employees by manager
// View employees by deparment
// Delete deparment, roles and employees
// View the total utilized budget of a department, the combined salaries of all employees in that department
