// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

  // ONE WAY
  /*
  const charList = {};
  [...str].forEach(char => {
    //console.log(char)
    if (charList.hasOwnProperty(char)) {
      charList[char] = charList[char] + 1;
    } else {
      charList[char] = 1;
    }
  })
  return Object.keys(charList).reduce((keyWithMaxVal, key) => (charList[key] > charList[keyWithMaxVal]) ? key : keyWithMaxVal)
  */

  // OTHER WAY
  const charCount = {};

  // Create object of characters count
  for (let char of str) {
    charCount[char] = (charCount[char] + 1) || 1;
  }

  let max = 0, maxChar;
  // Compare each value of characters count against the 'max' value
  for (let char in charCount) {
    if (charCount[char] > max) {
      max = charCount[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
