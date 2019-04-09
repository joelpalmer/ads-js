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

    shift() {
        if (!this.head) {
            return undefined;
        }

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(idx) {
        if (idx < 0 || idx > this.length) {
            return null;
        }
        let counter = 0;
        let current = this.head;
        while (counter !== idx) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(idx, val) {
        const node = this.get(idx);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }
}

/** Unit Tests **/
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

//repopulate
list.push("Liam");
list.push("Michelle");
list.push("Bash");

//shift()
list.shift();
assert.deepEqual({
    length: 2,
    head: { val: 'Michelle', next: { val: 'Bash', next: null } },
    tail: { val: 'Bash', next: null }
}, list);

list.shift();
assert.deepEqual({
    length: 1,
    head: { val: 'Bash', next: null },
    tail: { val: 'Bash', next: null }
}, list);

list.shift();
assert.deepEqual({ length: 0, head: null, tail: null }, list);

const finalShift = list.shift();
assert(undefined === finalShift);

// unshift()
list.unshift("Dusty");
assert.deepEqual({
    length: 1,
    head: { val: 'Dusty', next: null },
    tail: { val: 'Dusty', next: null }
}, list);

list.unshift("Buck");
assert.deepEqual({
    length: 2,
    head: { val: 'Buck', next: { val: 'Dusty', next: null } },
    tail: { val: 'Dusty', next: null }
}, list);

// get()
list.push("Mike");
assert.strictEqual(list.get(6), null);
assert.deepEqual(list.get(2), { val: 'Mike', next: null });
assert.deepEqual(list.get(1), { val: 'Dusty', next: { val: 'Mike', next: null } });

// set()
list.set(2, "Dodgers");
list.set(1, "Rockies");
assert.deepEqual(list.get(2), { val: 'Dodgers', next: null });
assert.deepEqual(list.get(1), { val: 'Rockies', next: { val: 'Dodgers', next: null } });

/** End Unit Tests */

module.exports = SinglyLinkedList;