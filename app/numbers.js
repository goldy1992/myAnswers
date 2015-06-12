exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {

      num = num >>> (bit-1);
    return num & 1;
  },

  base10: function(str) {


    var n = 1;
    var sum = 0; parseInt(str[str.length-1], 10);
    for (i = str.length - 2; i >= 0; i--)
    {
      var num = parseInt(str[i], 10);

      sum += Math.pow(num * 2, n);
      n++;
    }

    return sum;
  },

  convertToBinary: function(num) {

//console.log(0.5 > 0);
  var str = "";

  while (num > 0)
  {
    num = num / 2;
//console.log(num);
    if (num % 1 == 0)
      str = "0" + str;

    else
    {
      str = "1" + str;
      num -= 0.5;
    }

  }

  while (str.length < 8)
    str = "0" + str;    
      return str;

  },

  multiply: function(a, b) {
  var a1 = precision(a);
  var b1 = precision(b);

console.log ("a: " + a1 + ", b: " + b1 );
  var pres = 0;

  if (a1 > b1)
  pres = a1;

  else pres = b1;

  var ans = a * b;
  return parseFloat(ans.toFixed(pres));  
  }
};

function precision(n)
{
  n = n.toString();
  for (i = 0; i < n.length; i++)
    if (n[i] === ".")
      return n.length -1 - i;

  return -1;
}

