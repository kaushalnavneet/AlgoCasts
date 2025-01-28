// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  // It's important to draw the matrix for n upto 3 or 4
  // To conclude the number of columns and to decide on the condition 
  // for adding '#' or ' ' on each cell
  for (let row=0; row<n; row++) {
    let level = '';
    for (let col=0; col<2*n-1; col++) {
      const midpoint = n-1
      if (midpoint-row <= col && col <= midpoint+row) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level)
  }
}

module.exports = pyramid;
