const inquirer = require('inquirer')
const { pool } = require('pg')

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
});


const menu = async () => {
    const { action } = await inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'View employees by manager',
            'View employees by deparment',
            'Update employee managers',
            'Update an employee role',
            'Add an employee',
            'Add a department',
            'Add a role',
            'Delete department',
            'Delete roles',
            'Delete employees',
            'Exit'
        ],
    });

    
}





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
 