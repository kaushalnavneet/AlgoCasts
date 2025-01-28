// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

  // FUNDAMENTAL WAY - without slice
  /*
  const chunkedArray = [];
  let subArray = [];
  for (let elem of array) {
    subArray.push(elem);
    // As soon as the subArray fills with the size value, we push that subArray to the cunkedArray
    // and make the subArray empty for the next iteration
    if (subArray.length === size) {
      chunkedArray.push(subArray);
      subArray = [];
    }
  }
  // To cover the case when there are some elements filled in the subArray at the end but it was 
  // less than the size value, then it was not pushed into the for loop above, so we can explicitly push
  // that subArray below
  if (subArray.length) {  // Only push it when the subArray is not empty i.e. subArray.length > 0
    chunkedArray.push(subArray);
  }
  return chunkedArray;
  */

  // BETTER WAY - using slice

  const chunkedArray = [];
  for (let i=0; i<array.length; i+=size) {
    chunkedArray.push(array.slice(i, i + size))
  }
  return chunkedArray;

}

module.exports = chunk;
