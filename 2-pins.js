function validatePIN (pin) {
  //return true or false
  var whiteSpaceBetweenNums = /(\d)\s+(?=\d)/g;
  var nonNumeric = /[^0-9]/g;
  if(nonNumeric.test(pin) == true || (pin.length != 4 && pin.length != 6)) {
    return false;
  }
  else
    return true;
}
