// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/*
function steps(n) {
  // EASY WAY - using repeat function

  // for (let i=1; i<=n; i++) {
  //   console.log('#'.repeat(i) + ' '.repeat(n-i))
  // }

  // ANOTHER WAY - using matrix

  for (let row=0; row<n; row++) {
    let stair = '';
    for (let col=0; col<n; col++) {
      if (row >= col) {
        stair += '#'
      } else {
        stair += ' '
      }
    }
    console.log(stair)
  }
}
*/


// ONE MORE WAY - using recursion (complicated)

function steps(n, row = 0, stair = '') {
  if (row === n) {
    return;
  }

  if (stair.length === n) {
    console.log(stair);
    steps(n, row + 1);
    return;
  }

  if (stair.length <= row) {
    stair += '#'
  } else {
    stair += ' '
  }

  steps(n, row, stair)

}

module.exports = steps;
