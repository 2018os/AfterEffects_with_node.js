const fs = require('fs');
const dir = "C:/Users/user11/Documents/Adobe/Adobe Media Encoder/12.0/";   //로그 디렉토리
const DB = require('./db.js');  //DB
const DB_LogData = require('./LogData');  //schema
let text = 'AMEEncodingLog.txt';  //로그 파일
let reg = /\r\n/;    //정규식, 개행 체크
let reg2 = /^ - /;   //정규식, ' - '로 시작하는지 체크
let LogData = []; //DB에 저장할 데이터

DB();   //DB 연결
let timer = setInterval(() => {
  let j = 0;
  let FileSize = 0;
  let FileSize2 = fs.statSync(`${dir}${text}`);   //파일 사이즈

  if(FileSize !== FileSize2.size && FileSize2.size > 200) {   //파일의 크기가 다름
    let Log = fs.readFileSync(`${dir}${text}`, 'ucs2');  //로그 데이터
    let LogArr = Log.split(reg);  //정규식 체크해서 배열로 생성
    for(let i=0; i<LogArr.length; i++) {
      let LogArr2 = reg2.exec(LogArr[i]);   //두번째 정규식
      if(LogArr2 !== null) {
        LogData[j] = LogArr2.input;  //원하는 값 도출
        j++;
      }
    }
    DB_LogData.create({     //DB에 저장
      'Source_File': LogData[0], 'Output_File': LogData[1], 'Preset_Used': LogData[2], 'Video': LogData[3], 'Audio': LogData[4],
      'Bitrate': LogData[5], 'Encoding_Time': LogData[6]
    }).then((result) => {
      console.log(result);
      let clear = '';
      fs.writeFileSync(`${dir}${text}`, clear, 'ucs2');    //로그 파일 내용 지우기
      // stop();
    }).catch((err) => {
      console.error(err);
    });

  } else {
    console.log('not change');
  }
}, 3600); // 600 = 1초

function stop() {
  clearInterval(timer);
}