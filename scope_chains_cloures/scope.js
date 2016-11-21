function foo () {
  var bar;
  quux = 23;

  function zip () {
    var quux = 34;
    bar = true;
  }
  return zip;
}
// console.log(foo()());
