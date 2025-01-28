// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // Using reverse array
  //return strArr.reverse().join("");

  // Using reduce arary (best for keep reducing into a single val, like sum of each element, etc)
  return str.split('').reduce((reversed, char) => {
    return char + reversed;
  }, '');

  // conventional for of
  /*
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed
  }
  return reversed;
  */
}

module.exports = reverse;
