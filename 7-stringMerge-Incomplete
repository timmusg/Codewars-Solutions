function isMerge(s, part1, part2) {
  var part1Counter = 0;
  var part2Counter = 0;
  var sCounter = 0;
  s = s.replace(" ", "");
  part1 = part1.replace(" ", "");
  part2 = part2.replace(" ", "");
  s = s.toLowerCase();
  part1 = part1.toLowerCase();
  part2 = part2.toLowerCase();
  var sArray = s.split('');
  var part1Array = part1.split('');
  var part2Array = part2.split('');

  if((part1.length + part2.length) != s.length){
      return false;
  }

  while(sCounter<s.length) {
    if(part1Array[part1Counter] == sArray[sCounter] || part2Array[part2Counter] == sArray[sCounter]) {
       if(part1Array[part1Counter] == sArray[sCounter]) {
           if(part1Counter < part1Array.length) {
             part1Counter++;
             sCounter++;
           }
           else {
             sCounter++;
           }
       }
       else {
           if(part2Counter < part2Array.length) {
             part2Counter++;
             sCounter++;
           }
           else {
             sCounter++;
           }
       }
    }
    else {
        return false;
    }
  }
  return true;
}

var eString = "Bananas from Bahamas";
var string1 = "bahas";
var string2 = "Bananas from am";
console.log(isMerge(eString, string2, string1));
