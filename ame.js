const fs = require('fs');
const url = "C:/Users/user11/Desktop/오리/AE/";   // C:/Users/user11/Documents/Adobe/Adobe Media Encoder/13.0/
const DB = require('./db.js');
let data = fs.readFileSync(`${url}hello.txt`, 'utf-8');   // 분석할 txt: AMEEncodingLog

DB.query(`insert into data(description, created) values ('${data}', NOW())`, (err, result) => {
  if (err) console.error(err);

  //  DB에 넣은 후 txt 파일 삭제
});
console.log('hi');