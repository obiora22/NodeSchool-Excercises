function reduce1 (array, fn, accumulator) {
  accumulator = accumulator || [];
  var head = arra[0];
  accumulator.push(head);
  var tail = array.slice(1);
  return accumulator.concat(reduce(tail,accumulator))
}


function reduce (arr, fn, initial) {
  // start recursion inside reduce function
  return (function reduceStep(index, value) {
    if (index > arr.length -1 ) return value // base case
    return reduceStep(index + 1, fn(value, arr[index], index, arr))
  })(0,initial);
  // without the IIFE, the returned function will have to be invoked
  // with the required parameters.
  //The IIFE kicks off the the recursion
}
module.exports = reduce
