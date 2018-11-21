const { exec } = require('child_process');
exec('cd C:/Program Files/Adobe/Adobe After Effects CC 2018/Support Files && AfterFX.exe C:/Users/user11/Desktop/오리/AE/hello.aep', (error, stdout, stderr) => {
  if (error) {
    console.error('exec error: ' + error);
    return;
  }

  console.log('stdout: ' + stdout);
  console.log('stderr: ' + stderr);
});