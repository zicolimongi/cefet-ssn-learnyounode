module.exports = function(directory,extension,callback){
  var fs = require('fs');
  var path = require('path');
  fs.readdir(directory,function(err,files){
    var files_filtred = [];
    if(err == null){
      for(i in files){
        if(path.extname(files[i]).slice(1) == extension)
          files_filtred.push(files[i])
      }
      callback(err,files_filtred);
    }
    else{
      callback(err,null);
    }
  });
}