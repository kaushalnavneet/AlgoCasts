// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // ONE WAY
  /*
  let vowelCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }
  return vowelCount;
  */

  // ANOTHER WAY - using regex
  
  // 'str.match(pattern)' compares the patter present in the str and if it finds it, 
  // it returns in the form of an array
  // /[aeioi]/ - checks if str has these chars a,e,i,o,u. 
  // /.../gi - g to keep checking even if one match is found, i for case insensitive
  const matchCountArray = str.match(/[aeiou]/gi);
  return matchCountArray?.length || 0;  // if no match is found, it returns null not an empty array
}

module.exports = vowels;
