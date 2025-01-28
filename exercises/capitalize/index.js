// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  /*
  let newStr = '';
  for (let i in str) {
    if (i === '0' || str[i-1] === ' ') {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }
  return newStr;
  */

  // ANOTHER WAY - using slice

  // Inside map, it coverts substr 'they' into 'T'+'hey'
  const newStrArr = str.split(' ').map(substr => substr[0].toUpperCase() + substr.slice(1))

  console.log(newStrArr.join(' '))

  return newStrArr.join(' ')


}

module.exports = capitalize;
