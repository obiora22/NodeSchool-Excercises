const net = require('net');

function  getDate() {
  var date = new Date();
  
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  return `${year}-${padNumbers(month + 1, 2)}-${padNumbers(day, 2)} ${padNumbers(hours, 2)}:${padNumbers(minutes, 2)}\n`
}


function padNumbers(num, padding) {
  var numArray = num.toString().split('');
  var width = numArray.length;
  if (width < padding) {
    while(padding > width) {
      numArray.unshift('0')
      padding --
    }
    return numArray.join('');
  } else {
    return num.toString();
  }
  
}

const server = net.createServer((socket) => {
  socket.end(getDate());
})

server.listen(process.argv[2]);