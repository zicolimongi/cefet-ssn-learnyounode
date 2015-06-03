var fs = require('fs');
fs.readFile(process.argv[2],'utf8',callback);

function callback(err,data){
  if(err == null){
    data = data.split('\n');
    console.log(data.length - 1);
  }
}
