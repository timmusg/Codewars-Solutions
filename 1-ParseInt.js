function myParseInt(str) {
  //str = str.replace(/\s/g, '');
  var whiteSpaceBetweenNums = /(\d)\s+(?=\d)/g;
  var nonNumeric = /[^0-9\s]/g;

  if(whiteSpaceBetweenNums.test(str) == true || nonNumeric.test(str) == true || parseInt(str)%1 != 0) {
    return "NaN";
  }
  else {
    str = parseInt(str, 10);
    return str;
  }
}
