// Asynchronously read contents of a directory 
var fs = require('fs');
var file_ext = '.' + process.argv[3]
var regex = new RegExp(file_ext);
var result;
fs.readdir(process.argv[2], 'utf-8', function (err, data) {
   result = data.filter(function (elem, index) {
   return elem.match(regex);

  });

  for (var i = 0; i < result.length; i++) {
    console.log(result[i]);
  };
});

// you can also use the 'path' module to access basenames and extensions for files
