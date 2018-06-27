var moveZeros = function (arr) {
  var count = 0;
  for(var i = 0; i<arr.length; i++) {
    if(arr[i] === 0) {
       arr.splice(i,1);
       count++;
       i--;
    }
  }
  for(var j = 0; j<count; j++) {
    arr.push(0);
  }
  return arr;
};

var testArray = [0,0,1,2];
console.log(moveZeros(testArray));
