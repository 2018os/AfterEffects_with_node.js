const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'kim41516',
  database: 'ame'
});

connection.connect();

module.exports = connection;