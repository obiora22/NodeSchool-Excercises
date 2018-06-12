function repeat1(fn,num) {
  for(var i = 0; i < num; i++) {
		fn();
	}  
}

function repeat2(fn,num) {
	if (num <= 0) {
		return 
	}
	fn();
	return repeat2(fn, --num)
}
module.exports = repeat2;