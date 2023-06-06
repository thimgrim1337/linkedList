class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append = (value) => {
    if (this.head === null) return (this.head = new Node(value));

    let temp = this.head;
    while (temp.next !== null) temp = temp.next;

    temp.next = new Node(value);
  };

  prepend = (value) => {
    if (this.head === null) this.append(value);
    let temp = this.head;
    this.head = new Node(value);
    this.head.next = temp;
  };

  getSize = () => {
    if (this.head === null) return 0;
    let counter = 1;
    let temp = this.head;
    while (temp.next !== null) {
      counter++;
      temp = temp.next;
    }
    return counter;
  };

  getHead = () => {
    return this.head.value;
  };

  getTail = () => {
    let temp = this.head;
    while (temp.next !== null) temp = temp.next;
    return temp.value;
  };
}

const list = new LinkedList();
list.append('first');
list.append('second');
list.append('third');

// console.log(list.getSize());
console.log(list.getHead());
console.log(list.getTail());
