var readDirPersonalized = require("./moduleexec6.js")

readDirPersonalized(process.argv[2],process.argv[3],callback)

function callback(err,files){
  if(err == null){
    for(i in files){
      console.log(files[i]);
    }
  }
  else{
    console.log(err)
  }
}
