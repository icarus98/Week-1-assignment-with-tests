/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

// function isAnagram(str1,str2){
//     str1 = str1.toLowerCase();
//     str2 = str2.toLowerCase();
//     if (str1.length !== str2.length){
//         return false;
//     }
//     for(let i = 0; i<str1.length; i++){
//         if(!str1.includes(str2[i])){
//             return false;
//         }
//     }
//     return true;
// }
function isAnagram(str1, str2){
    let str3 = '';
    if(str1.length!==str2.length){
        // console.log("Not an anagram");
        return false;
    }
    else{
        for(let i=0; i<str1.length; i++){
            for(let j=0; j<str2.length; j++){
                if(str1[i]===str2[j]){
                    str3 += str1[i];
                }
            }
        }
    }
// isAnagram(str1,str2);
if(str1===str3){
    // console.log("It is an anagram");
    return true;
}
// else console.log("Not an anagram");
    return false;
}

module.exports = isAnagram;
