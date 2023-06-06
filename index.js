class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append = (data) => {
    if (this.head === null) return (this.head = new Node(data));

    let temp = this.head;
    while (temp.next !== null) temp = temp.next;

    temp.next = new Node(data);
  };

  prepend = (value) => {};
}

const list = new LinkedList();
list.append('first');
list.append('second');
// list.append('third');

console.log(list);
