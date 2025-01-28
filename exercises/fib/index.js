// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  // ONE WAY using iteration
  /*
  const fibArray = [0, 1];  // Base cases: fib(0) = 0, fib(1) = 1
  for (let i=2; i<=n; i++) {
    fibArray.push(fibArray[i-2] + fibArray[i-1]);
  }
  return fibArray[n]
  */

  // ANOTHER WAY - using recursion
  // But it's really costly when running for a larger number
  // Imagine drawing fib tree for fib(6)
  /*
  if (n < 2) {  // Base cases: fib(0) = 0, fib(1) = 1
    return n;
  }
  return fib(n-1) + fib(n-2);
  */

  // BEST WAY - esp. for higher number is using memoization
  return fibonacciMemoization(n); // we could do it directly on the fib function but I didn't want to change the args

  
}

const fibonacciMemoization = (n, cache={}) => {
  if (n <= 1) {
    return n;
  }
  if (cache[n]) {
    return cache[n];
  }
  cache[n] = fibonacciMemoization(n-1, cache) + fibonacciMemoization(n-2, cache);
  return cache[n]
} 

module.exports = fib;
