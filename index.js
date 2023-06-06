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
}

const list = new LinkedList();
list.append('first');
list.append('second');
list.prepend('test');

console.log(list);
