// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let size = 0;
    let node = this.head;
    while (node) {
      size++;
      node = node.next;
    }
    return size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    // return this.getAt(this.size() - 1);
    let node = this.head;
    while(node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
    return null;  // when there is no node
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) { // when the linked list is empty
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) { // when the linked list is empty
      return;
    }
    if (!this.head.next) {  // when the linked list has just one node
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next) { // keep looping until node.next is null, i.e. node is the last node
      previous = node;
      node = node.next;
    }
    previous.next = null; // as soon as you reach at the last node, set the previous.next as null
  }

  insertLast(data) {
    let node = this.head;
    if (!node) {
      this.head = new Node(data);
    }
    // we could have used getLast method too to see if it's empty and then assign the new node with data
    while (node) {
      if (!node.next) {
        node.next = new Node(data);
        return;
      }
      node = node.next;
    }
  }

  getAt(index) {
    let node = this.head;
    let i = 0;
    while (node) {
      if (i === index) {
        return node;
      } 
      i++;
      node = node.next;
    }
    return null;
  }

  /* 
  removeAt(index) {
    let previous = this.head;
    if (!previous) return;
    let node = this.head.next;
    if (!node) {
      this.head = null;
      return;
    }
    if (index === 0) {  // cover the case of removing the first node
      this.head = this.head.next;
      return;
    }
    let i = 1;

    while (node.next) {
      if (i === index) {
        previous.next = node.next;
        return;
      }
      i++;
      previous = node;
      node = node.next;
    }
    previous.next = null; // cover the case of removing the last node
  } 
  */

  // removeAt using the exisitng fn of getAt

  removeAt(index) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    previous.next = previous.next?.next || null;  // if index is out of bound, previous will be null, so add the ? operand and assign to null
  }

  insertAt(data, index) {
    if (!this.head) {  // if linked list is empty
      this.head = new Node(data);
      return;
    }
    if (index === 0) {  // inserts a new node with data at the 0 index when the list has elements
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();   // if index is out of bound then add the element to the last node, that's why added: || this.getLast()
    previous.next = new Node(data, previous.next);
  }

  forEach(func) {
    let node = this.head;
    let index = 0;  // index is optional here, forEach can be used w/o it too but helpful in some cases 
    while(node) {
      func(node, index);
      node = node.next;
      index++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

}

module.exports = { Node, LinkedList };
