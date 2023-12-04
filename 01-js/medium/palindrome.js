/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const specialChars = [",","!","?","."," "]
  let strArr = str.toLowerCase().split("")
  let strArrFiltered = [];
  for(let i = 0; i < strArr.length; i++){
    if(!specialChars.includes(strArr[i])){
      strArrFiltered.push(strArr[i])
    }
  }
  if(strArrFiltered.join() == strArrFiltered.reverse().join()){
    return true;
  }
  return false;
}

module.exports = isPalindrome;
