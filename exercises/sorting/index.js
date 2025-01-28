// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<(arr.length - i - 1); j++) {
      // if next element is higher, swap them
      if (arr[j] > arr[j+1]) {
        const temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  
  for (let i=0; i<arr.length; i++) {
    // Prove me wrong!
    // Always assign the element at i as lowest and then find the lower and swap them
    let indexOfMin = i;
    for (let j=i+1; j<arr.length; j++) {
      // if current element is less than the lowest we assigned, update the indexOfMin
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    // if indexOfMin is not the current element i, swap their places and push lowest to left 
    // to keep shorter in the first place
    if (i !== indexOfMin) {
      const temp = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;

}

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const midIndex = Math.floor(arr.length / 2);
  const left = arr.slice(0, midIndex);
  const right = arr.slice(midIndex);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];
  // Keep adding the first elements to results array 
  // after comparing which has smaller value - left and right array 
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  // Whatever leftover in left or right, append it with results
  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
