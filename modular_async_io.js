var filterModule = require('./directory_filter');

function handler (err, data) {
  if (err)
    return console.error(err);

  data.forEach(function (elem) {
    console.log(elem);
  })


}
filterModule(process.argv[2], process.argv[3], handler);
