const express = require('express');
const app = express();
const fs = require('fs');
const FolderName = "CopyFolder3";
const CopyFile = "AE/hello.aep";
const url = "C:/Users/user11/Desktop/오리/";

let users = [
  {
    id: 1,
    name: 'alice'
  },
  {
    id: 2,
    name: 'bek'
  },
  {
    id: 3,
    name: 'chris'
  }
];

app.get('/users', (req, res) => {
  console.log('who get in here/users');
  res.json(users)
});

app.get('/post', (req, res) => {
  console.log('who get in here post /users');
  let inputData;

  req.on('data', (data) => {
    inputData = JSON.parse(data);
  });

  req.on('end', () => {
//    console.log("user_id : "+inputData.user_id + " , name : "+inputData.name);
  });

  fs.mkdirSync(url+FolderName);
  fs.copyFileSync(url + CopyFile, url + FolderName + "/copyfile.aep");
  res.write("폴더 생성 완료");
  res.end();
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});