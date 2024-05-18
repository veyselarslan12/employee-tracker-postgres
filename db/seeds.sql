INSERT INTO departments (name)
VALUES ('Software Development'),
       ('IT Support'),
       ('Network Administration'),
       ('Cybersecurity'),
       ('Data Analytics'),
       ('Project Management'),
       ('Product Management'),
       ('Sales and Marketing');

INSERT INTO roles (title, salary, deparment_id)
VALUES ('Full Stack Developer', '100000', '1'),
       ('Desktop Support', '75000', '2'),
       ('Network Engineer', '82000', '3'),
       ('Security Engineer', '110000', '4'),
       ('Data Engineer', '105000', '5'),
       ('Project Coordinator', '98000', '6'),
       ('Business Analyst', '102000', '7'),
       ('Sales Manager', '79000', '8');

INSERT INTO employees (first_name, last_name, role_id, manager_id)   
VALUES ('Emily', 'Tompson', '3', '101'),
       ('Jhon', 'Martinez', '2', '102'),
       ('Sarah', 'Patel', '6', '103'),
       ('Michael', 'Robinson', '4', '104'),
       ('Jessica', 'Clark', '3', '101'),
       ('Daniel', 'Lewis', '8', '104'),
       ('Laura', 'Hall', '3', '103'),
       ('James', 'Young', '1', '1012'),
       ('Amy', 'Walker', '5', '101'),
       ('David', 'King', '7', '104');    
       