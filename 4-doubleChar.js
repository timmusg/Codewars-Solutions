function doubleChar(str) {
  var char;
  var array;
  for(var i = 0; i<str.length; i+=2) {
    char = str.charAt(i) + str.charAt(i);
    array = str.split('');
    array[i]=char;
    str = array.join('');
  }
  return str;
}
var string = "ha rdasdfasdf__  ";
console.log(doubleChar(string));
