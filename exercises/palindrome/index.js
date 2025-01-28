// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // Regular way:
  const reversedStr = [...str].reverse().join('')
  return str === reversedStr

  // Alternate way using Array every function:
  // const strArray = str.split('');
  // return strArray.every((char, i) => char === strArray[strArray.length - i - 1])
  // NOT AND IDEAL WAY, since we should only do the checking till the mid of the array 
  // to confirm if it is a palindrome or not 
}

module.exports = palindrome;
