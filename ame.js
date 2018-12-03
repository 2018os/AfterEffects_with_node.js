const fs = require('fs');
const url = "C:/Users/user11/Desktop/오리/AE/";
const DB = require('./db.js');
let data = fs.readFileSync(`${url}hello.txt`, 'utf-8');

DB.query(`insert into data(description, created) values ('${data}', NOW())`, (err, result) => {
  if (err) console.error(err);

});
console.log('hi');