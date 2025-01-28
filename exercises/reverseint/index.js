// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

  // Method 1
  /*
  const numArr = [...String(n)]
  if (numArr.includes('-')) {
    const arr = numArr.filter(num => num !== '-')
    return -arr.reverse().join('');
  }
  return +numArr.reverse().join('');
  */

  // Method 2
  // Convert number into a string using '.toString()',
  // convert that into an array using '.split('')',
  // reverse the array, now convert it back into a string using '.join('')',
  // convert that string back into a number using 'parseInt()'.
  // To cover the edge case of negative numbers, multiply with 'Math.sign()' 
  // that returns -1 for a negative number 1 for a positive number
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');
  return parseInt(reversed) * Math.sign(n)

}

module.exports = reverseInt;
