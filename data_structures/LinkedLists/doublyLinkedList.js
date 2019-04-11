const assert = require('assert');
const util = require('util');

/* I want these data structure modules to stand
   alone or I would consider Node base class */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return null;
        }
        const poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        if (!this.head) {
            return null;
        }
        const oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
}

/* Unit Tests */
const list = new DoublyLinkedList();

// push()
assert.deepEqual(list.push("Liam"), {
    head: { val: 'Liam', next: null, prev: null },
    tail: { val: 'Liam', next: null, prev: null },
    length: 1
});
/* best efforts. No deepEqual w/ circular refs
   when expected is inline literal like above.
   JSON.stringify's replacer might be an option
   or some 3rd party package. I'm getting full 
   coverage. But, I'd like a deep equality check
   on a list w/ 3+ nodes. 
*/
assert(list.push("Michelle").head.val === "Liam");
assert(list.push("Joel").tail.val === "Joel");
assert(list.push("Sam").length === 4);

// pop()
assert.deepEqual(list.pop(), { val: 'Sam', next: null, prev: null });
assert(list.length === 3);
list.pop();
list.pop();
list.pop();
assert.strictEqual(list.pop(), null);

// shift()
// setup
list.push("Dodgers");
list.push("Reds");
list.push("Padres");
list.push("Marlins");
// shift assertions
assert.deepEqual(list.shift(), { val: 'Dodgers', next: null, prev: null });
assert(list.length === 3);
list.shift();
list.shift();
list.shift();
assert.strictEqual(list.shift(), null);

/* End Unit Tests */

module.exports = DoublyLinkedList;