exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },

  speak : function(fn, obj) {
    return fn.call(obj);

  },

  functionFunction : function(str) {
    console.log("str: " + str);

    return function(str2)
    {

      return str + ", " + str2;
    }
  },

  makeClosures : function(arr, fn) {

   for (i = 0; i < arr.length; i++)
    arr[i] = function(x){return fn(x)};

  return arr;
},
  partial : function(fn, str1, str2) {
    return fn.bind(null, str1, str2);
  },

  useArguments : function() {

    var sum = 0;

    for(i = 0; i< arguments.length; i++)
      sum += arguments[i];

    return sum;
  },

  callIt : function(fn) {

    var args = [];
    for (i = 1; i < arguments.length; i++)
      args.push(arguments[i]);
    return fn.apply(null, args);

  },

  partialUsingArguments : function(fn) {

    var args = [];



    for (i = 1; i < arguments.length; i++)
      args.push(arguments[i]);

  
    return function()
    {

var x = args.concat(Array.prototype.slice.call(arguments));

      return fn.apply(this, x);
    }
  },

  curryIt : function(fn) {
 
    var arr = [];

    var x = function(i)
    { 
      arr.push(i);
      if (arr.length >= fn.length)
      {
        var res = fn.apply(null, arr); 
        return res;
      }
      else
        return x;
      
    }

    return x;

  }
};
