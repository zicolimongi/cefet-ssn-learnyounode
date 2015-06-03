var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request,response) {
  var fileName = process.argv[3], readStream = fs.createReadStream(fileName);

  readStream.on('open',function(){
    readStream.pipe(response);
  });

  readStream.on('error',function(err){
    response.end(err)
  });
});
server.listen(process.argv[2])