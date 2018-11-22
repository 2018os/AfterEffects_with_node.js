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

const {exec} = require('child_process');
const fsUtils = require('nodejs-fs-utils');
let folderSize = 0;

function F_Get_Folder_Size() {
  setInterval(() => {
    let prevSize = folderSize;
    let stats = fsUtils.fsizeSync('C:/Users/user11/Desktop/오리/AE', (err, size) => {
      if (err) console.error(err);
    });
    folderSize = stats.size;

    if (prevSize === folderSize) {
      console.log('same!');
      exec('cd C:/Program Files/Adobe/Adobe After Effects CC 2018/Support Files && AfterFX.exe C:/Users/user11/Desktop/오리/AE/hello.aep', (error, stdout, stderr) => {
        if (error) {
          console.error(error);
          return
        }

        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
      });
    } else {
      console.log('not same');
    }

  }, 3000); // 5초
}

F_Get_Folder_Size();



