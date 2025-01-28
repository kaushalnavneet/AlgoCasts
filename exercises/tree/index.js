// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => node.data !== data)
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(func) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift(); // remove first element from the arr and assign the new arr to node
      arr.push(...node.children); // similar to for of loop on node.children and push each child to arr
      func(node);
    }
  }

  traverseDF(func) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);
      func(node);
    }
  }
}

module.exports = { Tree, Node };
