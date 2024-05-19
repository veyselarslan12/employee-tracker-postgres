const inquirer = require('inquirer')

const viewAllDepartments = async (pool) => {
    const res = await pool.query(`SELECT * FROM departments`)
    console.table(res.rows);
};

const viewAllRoles = async (pool) => {
    const res = await pool.query(``)
    console.table(res.rows);
};

const viewAllEmployees = async (pool) => {
    const res = await pool.query(``)
    console.table(res.rows);
};

const viewEmployeesDepartment = async (pool) => {
    const res = await pool.query(``)
    console.table(res.rows);
};

const viewEmployeesManager = async (pool) => {
    const res = await pool.query(``)
    console.table(res.rows);
};

const updateEmployeeManagers = async (pool) => {
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