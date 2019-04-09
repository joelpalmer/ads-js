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

    pop() {
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}

/** Unit Tests */
// bootstrap
const list = new SinglyLinkedList();
// push() assertions
list.push("Liam");
assert.deepEqual({
    length: 1,
    head: { val: 'Liam', next: null },
    tail: { val: 'Liam', next: null }
}, list);

list.push("Michelle");
assert.deepEqual({
    length: 2,
    head: { val: 'Liam', next: { val: 'Michelle', next: null } },
    tail: { val: 'Michelle', next: null }
}, list);

list.push("Bash");
assert.deepEqual({
    length: 3,
    head: { val: 'Liam', next: { val: 'Michelle', next: { val: 'Bash', next: null } } },
    tail: { val: 'Bash', next: null }
}, list);

// pop() assertions
list.pop();
assert.deepEqual({
    length: 2,
    head: { val: 'Liam', next: { val: 'Michelle', next: null } },
    tail: { val: 'Michelle', next: null }
}, list);

list.pop();
list.pop();
assert.deepEqual({ length: 0, head: null, tail: null }, list);

const finalPop = list.pop();
assert(undefined === finalPop);

/** End Unit Tests */


module.exports = SinglyLinkedList;