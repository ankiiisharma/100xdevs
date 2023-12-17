/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;

    if(len1!==len2){
      return false;
    }

    let string1 = str1.toLowerCase().split('').sort().join();
    let string2 = str2.toLowerCase().split('').sort().join();

    if(string1==string2){
      return true;
    }

    else{
      return false;
    }
}

module.exports = isAnagram;