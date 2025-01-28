// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  // Remember we can't use counter and we can't use size method
  // gonna use the slow and fast method:
  // On each cycle, slow is increment by 1, but fast will increment by 2.
  // Before going for next iteration, fast will check if its next or second next is the last node?
  // If yes, slow is at the mid point of the node. If not, keep iterating.
  // The idea is that slow is moving with the half speed of fast, so by the time fast is at the end, slow must be in the middle

  let slow = list.getFirst(); // or list.head
  let fast = list.getFirst(); // or list.head

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

module.exports = midpoint;
