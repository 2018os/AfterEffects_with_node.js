const {exec} = require('child_process');
exec('cd C:/Program Files/Adobe/Adobe After Effects CC 2018/Support Files && aerender -project C:/Users/user11/Desktop/duck/AE/hello.aep -comp "comp2" -output C:/Users/user11/Desktop/duck/AE/project3.avi', (err, stdout, stderr) => {
  if(err){
    console.log(err);
  }

  console.log('stdout: ' + stdout);
  console.log('stderr: ' + stderr);
});
