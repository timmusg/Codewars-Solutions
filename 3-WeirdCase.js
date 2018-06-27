function toWeirdCase(string){
  var myArray;
  var chars;
  var cased;
  var j = 0;
  for(var i = 0; i<string.length; i++) {
    if(string.charAt(i) == " ") {
      j--;
    }
    else if(j%2==0) {
         myArray = string.split('');
         chars = myArray[i];
         cased = chars.toUpperCase();
         myArray.splice(i, 1, cased);
         string = myArray.join("");
     }
     else {
         myArray = string.split('');
         chars = myArray[i];
         cased = chars.toLowerCase();
         myArray.splice(i, 1, cased);
         string = myArray.join("");
     }
      j++;
  }
  return string;
}
var str = "LoOkS LiKe YoU PaSsEd";
var answer = "PoOpInG oN tHe ToIlEt"
console.log(toWeirdCase(str));
