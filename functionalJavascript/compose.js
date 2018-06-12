function sliceApple(apple) {
  let ingredient = Object.assign(apple);
  ingredient.state = 'sliced'
  console.log("Apple has been sliced.");
  return ingredient;
}

function bakeApple(apple) {
  let ingredient = Object.assign(apple);
  ingredient.state = 'baked'
  console.log("Apple has been baked.");
  return ingredient;
}

function makePie(apple) {
  let recipe = bakeApple(sliceApple(apple));
  console.log(recipe);

}

let apple = {
  state: 'unchanged'
};

console.log(apple);
makePie(apple);

function odd() {
  return function(num) {
    if (num % 2 === 0) {
      return true;
    }
  }
}
[1,2,3,4,5].filter(odd());

function cb(n) {
   return n;
}

function foo(cb) {
  var x = 20;
  return cb(x)
}
