function f(n){
  var sum = 0;
  if(isNaN(n) == true || n%1!=0 || n<1) {
    return false;
  }
  for(var i = 1; i<=n; i++) {
    sum += i;
  }
  return sum;
};
