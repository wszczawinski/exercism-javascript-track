export class LinkedList {
  constructor() {
    this.nodes = [];
  }

  push(node) {
    this.nodes.push(node);
  }

  pop() {
    return this.nodes.pop();
  }

  shift() {
    return this.nodes.shift();
  }

  unshift(node) {
    this.nodes.unshift(node);
  }

  delete(node) {
    let nodeToDelete = this.nodes.findIndex((n) => n == node);
    if (nodeToDelete != -1) {
      this.nodes.splice(nodeToDelete, 1);
    }
  }

  count() {
    return this.nodes.length;
  }
}
