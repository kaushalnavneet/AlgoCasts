// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const charCounter = (string) => {
  // Remove any special char or white space using regex, so any thing but ^a-zA-Z0-9 (alphanumeric)
  // will be removed. Alternate is to use ^\w but it includes _ too along with alphanumeric  
  const str = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  const obj = {};
  for (let char of str) {
    obj[char] = 1;
    if (!obj.hasOwnProperty(char)) {
      obj[char] = 1;
    } else {
      obj[char] += 1;
    }
  }
  return obj;
}

function anagrams(stringA, stringB) {

  // ONE WAY - proper comparison
  
  /*
  const objA = charCounter(stringA);
  const objB = charCounter(stringB);
  if (Object.keys(objA).length !== Object.keys(objB).length ) {
    return false;
  }
  for (let char in objA) {
    if (objA[char] !== objB[char]) {
      return false;
    }
  }
  return true;
  */

  // ANOTHER WAY - using sorting of string
  return cleanSortString(stringA) === cleanSortString(stringB)

}

const cleanSortString = (string) => {
  const str = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // string clean up - remove any special char or space
  return [...str].sort().join('');
}

module.exports = anagrams;
