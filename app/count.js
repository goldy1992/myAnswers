exports = (typeof window === 'undefined') ? global : window;
var timeout;


exports.countAnswers =  {
	count : function (start, end) {

		(function timeMe(i)
		{
			if (i > end)
				return;

			console.log(i);
			i++;
			timeout = setTimeout(function(j){

				timeMe(j);
			}, 100, i);	
		})(start);

		return {
			cancel : function(){clearTimeout(timeout);}
		};
	},



};

