const express = require('express');
const app = express();
const fs = require('fs');
const FolderName = "CopyFolder3";
const CopyFile = "AE/hello.aep";
const url = "C:/Users/user11/Desktop/오리/";
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main.html'));
});

io.on('connection', (socket) => {

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  console.log('hello');
  socket.on('msg', (msg) => {
    console.log(msg);
    socket.emit('msg');
  });
  // fs.mkdirSync(url+FolderName);
  // fs.copyFileSync(url + CopyFile, url + FolderName + "/copyfile.aep");
});



http.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});