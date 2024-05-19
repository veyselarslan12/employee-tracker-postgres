const inquirer = require('inquirer')

const viewAllDepartments = async (pool) => {
    const res = await pool.query(`
    SELECT * 
    FROM departments`)
    console.table(res.rows);
};

const viewAllRoles = async (pool) => {
    const res = await pool.query(`
    SELECT roles.id, roles.title, roles.salary, departments.name 
    AS departments 
    FROM roles 
    JOIN departments 
    ON roles.department_id = departments.id;`)
    console.table(res.rows);
};

const viewAllEmployees = async (pool) => {
    const res = await pool.query(`
    SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name 
    AS department,  roles.salary, employees.manager_id 
    FROM employees 
    JOIN roles ON employees.roles_id = roles.id 
    JOIN departments ON roles.department_id = departments.id;`)
    console.table(res.rows);
};

const viewEmployeesDepartment = async (pool) => {
    const res = await pool.query(`
    SELECT employees.id, employees.first_name, employees.last_name, departments.name 
    AS department 
    FROM employees 
    JOIN roles ON employees.roles_id = roles.id 
    JOIN departments ON roles.department_id = departments.id;`)
    console.table(res.rows);
};

const viewEmployeesManager = async (pool) => {
    const res = await pool.query(`
    SELECT employees.id, employees.first_name, employees.last_name, employees.manager_id 
    FROM employees;`)
    console.table(res.rows);
};

const updateEmployeeManager = async (pool) => {
    const res = await pool.query(``)
    console.table(res.rows);
};

const updateEmployeeRole = async (pool) => {
    const res = await pool.query(``)
    console.table(res.rows);
};

const addEmployee = async (pool) => {
    const res = await pool.query(``)
    console.table(res.rows);
};

const addDepartment = async (pool) => {
    const res = await pool.query(``)
    console.table(res.rows);
};

const addRole = async (pool) => {
    const res = await pool.query(``)
    console.table(res.rows);
};

const deleteDepartment = async (pool) => {
    const res = await pool.query(``)
    console.table(res.rows);
};

const deleteRoles = async (pool) => {
    const res = await pool.query(``)
    console.table(res.rows);
};

const deleteEmployees = async (pool) => {
    const res = await pool.query(``)
    console.table(res.rows);
};


// SELECT employees.id, employees.first_name, employees.last_name, employees.manager_id FROM employees;