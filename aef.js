// file Size

// const { exec } = require('child_process');
// const fs = require('fs');
// let fileSize = 0;
//
// function getFileSize() {
//   setInterval(() => {
//     let prevSize = fileSize;
//     let stats = fs.statSync('C:/Users/user11/Desktop/오리/AE/hello.aep');
//     fileSize = stats.size;
//
//     if(prevSize === fileSize) {
//       console.log('same!');
//       exec('cd C:/Program Files/Adobe/Adobe After Effects CC 2018/Support Files && AfterFX.exe C:/Users/user11/Desktop/오리/AE/hello.aep', (error, stdout, stderr) => {
//         if (error) {
//           console.error(error);
//           return
//         }
//
//         console.log('stdout: ' + stdout);
//         console.log('stderr: ' + stderr);
//       });
//     } else {
//       console.log('not same');
//     }
//
//   }, 3000); // 5초
// }
//
// getFileSize();

// folder Size

const url = 'C:/Users/user11/Desktop/오리/AE/';
const fs = require('fs');
const path = require('path');
let File_List = fs.readdirSync(url);
const execSync = require('sync-exec');
const fsUtils = require('nodejs-fs-utils');
let folderSize = 0;

function F_Get_Folder_Size() {
  let timer = setInterval(() => {
    let prevSize = folderSize;
    let stats = fsUtils.fsizeSync(url, (err, size) => {
      if (err) console.error(err);
      console.log('파일 사이즈 확인');
    });
    folderSize = stats.size;

    if (prevSize === folderSize) {
      console.log('이전 크기와 현재 크기가 같다');
      File_List.forEach((file) => {
        console.log('foreach 시작');
        if(path.extname(file) === '.aep') {
          console.log(file + ': .aep');
          execSync(`cd C:/Program Files/Adobe/Adobe After Effects CC 2018/Support Files && AfterFX.exe ${url}${file}`);

        } else {
          console.log(file + ': are not');
        }
      });
      clearInterval(timer);
    } else {
      console.log('이전 크기와 현재 크기가 다르다');
      console.log('not same');
    }

  }, 3000); // 5초
}

F_Get_Folder_Size();
