const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'mydb'
});

connection.connect((err) => {
    if (err) {
        console.log('Error connecting:', err);
        return;
    }
    console.log('Connected');
});

module.exports = connection;
