exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {


  	var obj = new Object();
  		obj.name = str2;
	obj.greeting = str1;
	obj.sayIt = function() {
        return this.greeting + ', ' + this.name};
      

  	return obj;

  }
};
