exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
	var something = $.Deferred();

	setTimeout(function(){
  	something.resolve(value);
	}, 50);

  	return something.promise();
  }, 

  manipulateRemoteData : function(url) {
	var something = $.Deferred();


	$.getJSON(url, function(data)
		{
			var array = [];
			  			data.people.forEach(function(person){
array.push(person.name);
			  			});

  			something.resolve(array.sort());


		});


  	return something.promise();
  }
};
