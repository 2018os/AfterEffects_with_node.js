const mongoose = require('mongoose');
module.exports = () => {
  const connect = () => {
    mongoose.connect('mongodb://kim:kim41516@localhost:27017/admin',{
      dbName: 'ame_log'
    }, (err) => {
      if(err) {
        console.log(err);
      } else {
        console.log('몽고DB 연결');
      }
    });
  };
  connect();
  mongoose.connection.on('error', (err) => {
    console.error(err);
  });
  mongoose.connection.on('disconnected', () => {
    console.error('몽고DB의 연결이 끊겼습니다. 재접속을 시도합니다.');
    connect();
  });

  require('./LogData');
};