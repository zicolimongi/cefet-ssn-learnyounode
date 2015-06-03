var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2],callback);

function callback(err,files){
  if(err == null){
    for(i in files){
      if(path.extname(files[i]).slice(1) == process.argv[3]){
        console.log(files[i]);
      }
    }
  }
}
