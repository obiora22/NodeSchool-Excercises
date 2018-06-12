function duckCount(arr) {
  var args = [].slice.call(arguments);
  var result = args.filter(function(obj, index) {
    obj.hasOwnProperty('quack')
  });
  return result.length;
}
