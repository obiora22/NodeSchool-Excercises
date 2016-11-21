var http = require('http');
var url = process.argv[2];

var result = '';
http.get(url, function (response) {
  // Is response a buffer?
  response.on('data', function (chunk) {
    result += chunk;
  });
  response.on('error', function (error) {
    console.log(error);
  })
  response.on('end', function () {
    console.log(result.length);
    console.log(result);
  })
}).on('error', function (error) {
  console.log(error);
})

/*
  You can use 'Buffer List' node package to
  collect all the emitted data

  var bl = required('bl')

  http.get(url, function (reponse) {
  response.pipe(bl(function (err, data) {
    if (err) {
    console.log(err)
  }
  data = data.toString();
  console.log(data.length);
  console.log(data);
  }))
  })

 */
