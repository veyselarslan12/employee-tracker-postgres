const inquirer = require('inquirer')
const pool = require('./pool')

const viewAllDepartments = async () => {
    try {
        const res = await pool.query('SELECT * FROM departments;');
        console.table(res.rows);
    } catch (err) {
        console.error('Error viewing departments:', err);
    }
};

const viewAllRoles = async () => {
    const res = await pool.query(`
    SELECT roles.id, roles.title, roles.salary, departments.name 
    AS department 
    FROM roles 
    JOIN departments 
    ON roles.department_id = departments.id;`)
    console.table(res.rows);
};

const viewAllEmployees = async () => {
    const res = await pool.query(`
    SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name 
    AS department, roles.salary, employees.manager_id 
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


const updateEmployeeRole = async () => {
    const employeeRes = await pool.query('SELECT id, first_name, last_name FROM employees;')
    const employees = employeeRes.rows;
    const rolesRes = await pool.query('SELECT id, title FROM roles;')
    const roles = rolesRes.rows;

    const { employee_id } = await inquirer.prompt([
        {
            name: 'employee_id',
            type: 'list',
            message: 'Select the employee whose role you want to update:',
            choices: employees.map(employee => ({name: `${employee.first_name} ${employee.last_name}`, value: employee.id}))
        }
    ]);

    const { role_id } = await inquirer.prompt([
        {
            name: 'role_id',
            type: 'list',
            message: 'Select the new role for the employee:',
            choices: roles.map(role => ({name: role.title, value: role.id}))
        }
    ]);

    await pool.query('UPDATE employees SET roles_id = $1 WHERE id = $2;', [role_id, employee_id])
    console.log('Employee role updated successfully.')
};

const addEmployee = async () => {
    const roles = await pool.query('SELECT * FROM roles;');
    
    const { first_name, last_name, roles_id, manager_id } = await inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: 'Enter the employee first name:'
        },
        {
            name: 'last_name',
            type: 'input',
            message: 'Enter the employee last name:'
        },
        {
            name: 'roles_id',
            type: 'list',
            message: 'Select the role for this employee:',
            choices: roles.rows.map(role => ({name: role.title, value: role.id}))
        },
        {
            name: 'manager_id',
            type: 'list',
            message: 'Select the manager for this employee:',
            choices: [{name: 'None', value: null}, 1, 2, 3, 4, 5, 6, 7, 8]
        },
        
    ])
    await pool.query('INSERT INTO employees (first_name, last_name, roles_id, manager_id) VALUES ($1, $2, $3, $4);', [first_name, last_name, roles_id, manager_id])
    console.log(`Added employee ${first_name} ${last_name}.`)
};

const addDepartment = async () => {
    const { name } = await inquirer.prompt({
        name: 'name',
        type: 'input',
        message: 'Enter the name of the department:',
    });
    await pool.query('INSERT INTO departments (name) VALUES ($1);', [name]);
    console.log(`Added department ${name}.`);
};

const addRole = async () => {
    const departments = await pool.query('SELECT * FROM departments;')
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
            choices: departments.rows.map(department => ({ name: department.name, value: department.id}))
        }
    ])
    await pool.query('INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3);', [title, salary, department_id])
    console.log(`Added role ${title}.`);
};

const deleteDepartment = async () => {
    const department = await pool.query('SELECT * FROM departments;')
    const { department_id }= await inquirer.prompt({
        name: 'department_id',
        type: 'list',
        message: 'Select the department to delete:',
        choices: department.rows.map(departments => ({ name: departments.name, value: departments.id}))
    })
    await pool.query('DELETE FROM departments WHERE id = $1', [department_id])
    console.log('Department deleted.');
};

const deleteRoles = async () => {
    const roles = await pool.query('SELECT * FROM roles;')
    const { role_id } = await inquirer.prompt({
        name: 'role_id',
        type: 'list',
        message: 'Select the role to delete:',
        choices: roles.rows.map(role => ({ name: role.title, value: role.id}))
    })
    await pool.query('DELETE FROM roles WHERE id = $1', [role_id])
    console.log('Role deleted.')
};

const deleteEmployees = async () => {
    const employee = await pool.query('SELECT * FROM employees;')
    const { employee_id } = await inquirer.prompt({
        name: 'employee_id',
        type: 'list',
        message: 'Select the employee to delete:',
        choices: employee.rows.map(employees => ({ name: employees.first_name, value: employees.id}))
    })
    await pool.query('DELETE FROM employees WHERE id = $1', [employee_id])
    console.log('Employee deleted.')
};


module.exports = { viewAllDepartments, viewEmployeesManager, viewEmployeesDepartment, viewAllRoles, viewAllEmployees, addDepartment, addRole, updateEmployeeRole, addEmployee, deleteDepartment, deleteRoles, deleteEmployees };


