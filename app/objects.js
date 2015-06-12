exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
	return fn.call(obj, obj.name, obj.greeting);
  },

  alterObjects : function(constructor, greeting) {
  	constructor.prototype.greeting = greeting;
  	return constructor;
  },

  iterate : function(obj) {
	var x = Object.getOwnPropertyNames(obj);

	var arr = [];

	for (var i = 0; i < x.length; i++) {
		var s = x[i] + ": " + obj[x[i]];
		arr.push(s);
	};
  	return  arr;
  }
};
