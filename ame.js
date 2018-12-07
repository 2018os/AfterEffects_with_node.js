const fs = require('fs');
const dir = "C:/Users/user11/Documents/Adobe/Adobe Media Encoder/12.0/";   //로그 디렉토리
const DB = require('./db.js');
let text = 'AMEEncodingLog.txt';
let reg = /\r\n/;    //정규식, 개행 체크
let reg2 = /^ - /;   //정규식, ' - '로 시작하는지 체크
let FileSize = 0;
let j = 0;
let LogData = [];
// 랜더링

let timer = setInterval(() => {
  let FileSize2 = fs.statSync(`${dir}${text}`);
  console.log("fileSize");
  if(FileSize !== FileSize2.size && FileSize2.size !== 0) {   //파일의 크기가 다름
    let Log = fs.readFileSync(`${dir}${text}`, 'ucs2');  //로그 데이터
    let LogArr = Log.split(reg);  //체크해서 배열로 생성
    // for(let i=0; i<LogArr.length; i++) {
    //   let LogArr2 = reg2.exec(LogArr[i]);
    //   if(LogArr2 !== null) {
    //     LogData[j] = LogArr2.input;  //원하는 값 도출
    //     console.log(`LogData[${j}]:` + LogData[j]);
    //     j++;
    //   }
    // }
    // DB.query(`insert into data(description, created) values ('${Log}', NOW())`, (err, result) => {
    //   if (err) console.error(err);
    //
    //   let clear = '';
    //   fs.writeFileSync('C:/Users/user11/Desktop/sdf.txt', clear, 'utf-8');
    //   FileSize = FileSize2.size;
    //   stop();
    // });
    console.log(LogArr);
  } else {
    console.log('not change');
  }
}, 1000);

function stop() {
  clearInterval(timer);
}