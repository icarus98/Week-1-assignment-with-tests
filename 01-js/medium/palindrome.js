/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
//   let reverseStr = str.split("").reverse().join("");
//   if(str===reverseStr){
//       return true;
//   }
    return (str.toLowerCase() === str.split("").reverse().join("").toLowerCase()) ? true : false;
}

module.exports = isPalindrome;
