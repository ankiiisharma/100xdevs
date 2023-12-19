/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let i = 0;
  let j = str.length-1;
  while(i<j){
    // if(isNotAlphanumeric(str[i])){
    //   i++;
    // }
    // else if(isNotAlphanumeric(str[j])){
    //   j--;
    // }
    if(str[i].toLowerCase() !== str[j].toLowerCase()){
      return false;
    }
    else {
     i++;
     j--;
    }
  }
  return true;
}

module.exports = isPalindrome;