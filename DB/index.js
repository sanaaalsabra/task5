const connection = require('./db');

const sql = 'SELECT * FROM movies';

connection.query(sql, (err, results) => {
    if (err) {
        console.log('Query error:', err);
        return;
    }
    console.log('Movies:', results);
});

connection.end();
