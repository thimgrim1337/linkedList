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
    if (this.head !== null) {
      let counter = 1;
      let temp = this.head;
      while (temp.next !== null) {
        counter++;
        temp = temp.next;
      }
      return counter;
    }
    return 0;
  };

  getHead = () => {
    if (this.head !== null) return this.head.value;
    return null;
  };

  getTail = () => {
    if (this.head !== null) {
      let temp = this.head;
      while (temp.next !== null) temp = temp.next;
      return temp.value;
    }
    return null;
  };

  at = (index) => {
    if (index >= this.getSize() || index < 0) return null;
    if (this.head !== null) {
      let temp = this.head;
      let counter = 0;
      while (counter !== index) {
        counter++;
        temp = temp.next;
      }
      return temp.value;
    }
  };

  pop = () => {
    if (this.head !== null) {
      let temp = this.head;
      while (temp.next !== null) {
        if (temp.next.next === null) {
          temp.next = null;
          return;
        }
        temp = temp.next;
      }
    }
    return 0;
  };
}

const list = new LinkedList();
list.append('first');
list.append('second');
list.append('third');
list.prepend('test');

// console.log(list.getSize());
// console.log(list.getHead());
// console.log(list.getTail());
// console.log(list.at(2));
console.log(list.pop());
// console.log(list);
console.log(JSON.stringify(list));
