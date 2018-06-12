function duckCount(object_arr) {
  var args = Array.prototype.slice.call(arguments,0);
  var count = 0;
  console.log(args)
  args.forEach(function (obj,index) {
    return Object.prototype.hasOwnProperty.call(obj,'quack') ? ++count : count
  })
  return count
}

function duckCount1(object_arr) {
  var args = Array.prototype.slice.call(arguments,0);

  return args.filter(function (obj,index) {
    return Object.prototype.hasOwnProperty.call(obj,'quack')
  }).length

}

module.exports = duckCount1
