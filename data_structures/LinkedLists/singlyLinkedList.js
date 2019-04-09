const assert = require('assert');

// Node: has a value & ref to next node
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

/** Unit Tests */
// bootstrap
const list = new SinglyLinkedList();
// push() assertions
list.push("Liam");
list;//?

assert.deepEqual({
    length: 1,
    head: { val: 'Liam', next: null },
    tail: { val: 'Liam', next: null }
}, list);
list.push("Michelle");
list;

assert.deepEqual({ length: 2, 
    head:  { val: 'Liam', next:  { val: 'Michelle', next: null } }, 
    tail:  { val: 'Michelle', next: null } } , list);

list.push("Bash");
list;

assert.deepEqual({ length: 3, 
    head:  { val: 'Liam', next:  { val: 'Michelle', next: { val: 'Bash', next: null } } }, 
    tail:  { val: 'Bash', next: null } }, list);
/** End Unit Tests */


module.exports = SinglyLinkedList;