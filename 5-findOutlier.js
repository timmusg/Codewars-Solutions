var oddArray = [];
  var evenArray = [];
  for(var i = 0; i<integers.length; i++) {
     var current = integers[i];
     if(current%2 == 0) {
       evenArray.push(current);
     }
     else
       oddArray.push(current);
  }
  if(evenArray.length > 1) {
    for(var i = 0; i<integers.length; i++) {
      if(integers[i]%2 != 0) {
        return integers[i];
      }
    }
  }
  else if(oddArray.length > 1) {
    for(var i = 0; i<integers.length; i++) {
      if(integers[i]%2 == 0) {
        return integers[i];
      }
    }
  }
