var http = require('http');

var urls = [process.argv[2], process.argv[3], process.argv[4]];
var results = [];
var count = urls.length;

var printData = function () {
  for (var i = 0; i < results.length; i++) {
    console.log(results[i])
  }
};

urls.forEach(function (url, index) {

  http.get(url, function (response) {
    var result = '';
    response.on('data', function (chunk) {
      result += chunk;
    })
    response.on('error', function (error) {
      console.log(error);
    })
    response.on('end', function () {
      // Is this callback counting?
      results[index] = result;
      count --
      if (count === 0) {
        printData()
      }

    });
  })
});
