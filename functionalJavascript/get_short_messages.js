function getShortMessages1(objs) {
	var res = [];
	objs.filter(function (elem) {
		if (elem.message.length < 50) {
			res.push(elem.message);
		}
	})
	return res;
}

function getShortMessages2(objs) {
	return objs.filter(function (elem){
		return elem.message.length < 50;
	}).map(function (elem){
		return elem.message;
	})
}
module.exports = getShortMessages2;