const inquirer = require('inquirer')
const pool = require('./pool')

const viewAllDepartments = async () => {
    const res = await pool.query(`
    SELECT * 
    FROM departments`)
    console.table(res.rows);
};

const viewAllRoles = async () => {
    const res = await pool.query(`
    SELECT roles.id, roles.title, roles.salary, departments.name 
    AS departments 
    FROM roles 
    JOIN departments 
    ON roles.department_id = departments.id;`)
    console.table(res.rows);
};

const viewAllEmployees = async () => {
    const res = await pool.query(`
    SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name 
    AS department,  roles.salary, employees.manager_id 
    FROM employees 
    JOIN roles ON employees.roles_id = roles.id 
    JOIN departments ON roles.department_id = departments.id;`)
    console.table(res.rows);
};

const viewEmployeesDepartment = async () => {
    const res = await pool.query(`
    SELECT employees.id, employees.first_name, employees.last_name, departments.name 
    AS department 
    FROM employees 
    JOIN roles ON employees.roles_id = roles.id 
    JOIN departments ON roles.department_id = departments.id;`)
    console.table(res.rows);
};

const viewEmployeesManager = async () => {
    const res = await pool.query(`
    SELECT employees.id, employees.first_name, employees.last_name, employees.manager_id 
    FROM employees;`)
    console.table(res.rows);
};

const updateEmployeeManager = async () => {
    
};

const updateEmployeeRole = async () => {
    
};

const addEmployee = async () => {
    const { first_name, last_name } = await inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: 'Enter the employee first name:'
        },
        {
            name: 'last_name',
            type: 'input',
            message: 'Enter the employee last name:'
        }
    ])
    await pool.query('INSERT INTO employees (first_name, last_name) VALUES ($1, $2)', [first_name, last_name])
    console.log(`Added employee ${first_name} ${last_name}.`)
};

const addDepartment = async () => {
    const name = await inquirer.prompt({
        name: 'name',
        type: 'input',
        message: 'Enter the name of the department:',
    });
    await pool.query('INSERT INTO departments (name) VALUES ($1)', [name]);
    console.log(`Added department ${name}.`);
};

const addRole = async () => {
    const department = await pool.query('SELECT * FROM departments')
    const { title, salary, department_id } = await inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'Enter the role title:'
        },
        {
            name: 'salary',
            type: 'input',
            message: 'Enter the salary:'
        },
        {
            name: 'department_id',
            type: 'list',
            message: 'Select the department for this role:',
            choices: department.rows.map(departments => ({ name: departments.name, value: department_id}))
        }
    ])
    await pool.query('INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, department_id])
    console.log(`Added role ${title}.`);
};

const deleteDepartment = async () => {
    const department = await pool.query('SELECT * FROM departments')
    const department_id = await inquirer.prompt({
        name: 'department_id',
        type: 'list',
        message: 'Select the department to delete:',
        choices: department.rows.map(departments => ({ name: departments.name, value: departments.id}))
    })
    await pool.query('DELETE FROM departments WHERE id = $1', [department_id])
    console.log(`Department deleted.`);
};

const deleteRoles = async () => {
    
};

const deleteEmployees = async () => {
    
};


// SELECT employees.id, employees.first_name, employees.last_name, employees.manager_id FROM employees;