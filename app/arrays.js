exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (i = 0; i < arr.length; i++)
      if (arr[i] == item)
        return i;

    return -1;
  },

  sum : function(arr) {
    var sum = 0;

    for (i = 0; i < arr.length; i++)
      sum += arr[i];

    return sum;

  },

  remove : function(arr, item) {

    var newArray = [];
    var currentIndex = 0;

    for (i = 0; i < arr.length; i++)
      if(arr[i] !== item)
      {
        newArray[currentIndex] = arr[i];
        currentIndex++;
      }

      return newArray;
  },

  removeWithoutCopy : function(arr, item) {
    for (i = 0; i < arr.length; i++)
      if (arr[i] === item)
      {  arr.splice(i, 1);
      i--;
   }
   return arr;
  },

  append : function(arr, item) {

    arr[arr.length] = item;
    return arr;
  },

  truncate : function(arr) {

    arr.splice(arr.length-1, 1);
    return arr;

  },

  prepend : function(arr, item) {
    arr.splice(0, 0, item);
    return arr;

  },

  curtail : function(arr) {
    arr.splice(0,1);
    return arr;

  },

  concat : function(arr1, arr2) {

return arr1.concat(arr2);

  },

  insert : function(arr, item, index) {

    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for (i = 0; i < arr.length; i++)
      if (arr[i] == item)
        count++;

      return count;

  },

  duplicates : function(arr) {

    arrDup = [];

    for (i = 0; i < arr.length; i++)
    {
          for (j = i+1; j < arr.length; j++)
            if (arr[i] == arr[j])
            {
              var isIn = false;
              for (k = 0; k < arrDup.length; k++)
                if (arrDup[k]  == arr[i])
                  isIn = true;

                if(!isIn)
                  arrDup[arrDup.length] = arr[i];
            }
    }

    return arrDup;
  },

  square : function(arr) {

        for (i = 0; i < arr.length; i++)
          arr[i] *= arr[i];

        return arr;

  },

  findAllOccurrences : function(arr, target) {

    var count = [];
    for (i = 0; i < arr.length; i++)
      if (arr[i] == target)
        count[count.length] = i;

      return count;
  }
};
