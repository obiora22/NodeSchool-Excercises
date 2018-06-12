var filterFiles = require('./filter_module');
var dir_path = process.argv[2];
var ext = '.' + process.argv[3];
filterFiles(dir_path, ext, function (err,data) {
  if (err) {
    return console.log(err);
  }


  data.forEach(function (file) {
    console.log(file);
  })
})
