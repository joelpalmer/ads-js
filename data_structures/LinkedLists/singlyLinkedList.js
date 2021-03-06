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

    // O(n)
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

    // O(1)
    insert(idx, val) {
        if (idx < 0 || idx > this.length) {
            return false;
        }
        if (idx === this.length) {
            return !!this.push(val);
        }
        if (idx === 0) {
            return !!this.unshift(val);
        }
        const newNode = new Node(val);
        const previousNode = this.get(idx - 1);
        const previousNext = previousNode.next;
        previousNode.next = newNode;
        newNode.next = previousNext;
        this.length++;
        return true;
    }

    // O(n)
    remove(idx) {
        if (idx < 0 || idx >= this.length) {
            return null;
        }
        if (idx === this.length - 1) {
            return this.pop();
        }
        if (idx === 0) {
            return this.shift();
        }
        const previousNode = this.get(idx - 1);
        const removedNode = previousNode.next;
        previousNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let nextNode;
        let previousNode = null;
        for (let i = 0; i < this.length; i++) {
            nextNode = node.next;
            node.next = previousNode;
            previousNode = node;
            node = nextNode;
        }
        return this;
    }
}

/** Unit Tests **/
// bootstrap
const list = new SinglyLinkedList();
// push() assertions
list.push("Liam");
assert.deepEqual(list, {
    length: 1,
    head: { val: 'Liam', next: null },
    tail: { val: 'Liam', next: null }
});

list.push("Michelle");
assert.deepEqual(list, {
    length: 2,
    head: { val: 'Liam', next: { val: 'Michelle', next: null } },
    tail: { val: 'Michelle', next: null }
});

list.push("Bash");
assert.deepEqual(list, {
    length: 3,
    head: { val: 'Liam', next: { val: 'Michelle', next: { val: 'Bash', next: null } } },
    tail: { val: 'Bash', next: null }
});

// pop() assertions
list.pop();
assert.deepEqual(list, {
    length: 2,
    head: { val: 'Liam', next: { val: 'Michelle', next: null } },
    tail: { val: 'Michelle', next: null }
});

list.pop();
list.pop();
assert.deepEqual(list, { length: 0, head: null, tail: null });

const finalPop = list.pop();
assert(undefined === finalPop);

//repopulate
list.push("Liam");
list.push("Michelle");
list.push("Bash");

//shift()
list.shift();
assert.deepEqual(list, {
    length: 2,
    head: { val: 'Michelle', next: { val: 'Bash', next: null } },
    tail: { val: 'Bash', next: null }
});

list.shift();
assert.deepEqual(list, {
    length: 1,
    head: { val: 'Bash', next: null },
    tail: { val: 'Bash', next: null }
});

list.shift();
assert.deepEqual(list, { length: 0, head: null, tail: null });

const finalShift = list.shift();
assert(undefined === finalShift);

// unshift()
list.unshift("Dusty");
assert.deepEqual(list, {
    length: 1,
    head: { val: 'Dusty', next: null },
    tail: { val: 'Dusty', next: null }
});

list.unshift("Buck");
assert.deepEqual(list, {
    length: 2,
    head: { val: 'Buck', next: { val: 'Dusty', next: null } },
    tail: { val: 'Dusty', next: null }
});

// get()
list.push("Mike");
assert.strictEqual(list.get(6), null);
assert.deepEqual(list.get(2), { val: 'Mike', next: null });
assert.deepEqual(list.get(1), { val: 'Dusty', next: { val: 'Mike', next: null } });

// set()
list.set(2, "Dodgers");
list.set(1, "Rockies");
assert.strictEqual(list.set(9, "Giants"), false);
assert.deepEqual(list.get(2), { val: 'Dodgers', next: null });
assert.deepEqual(list.get(1), { val: 'Rockies', next: { val: 'Dodgers', next: null } });

// insert()
/* push and unshift are already covered but we will check for
   proper return value */
assert.strictEqual(list.insert(9, "Reds"), false);
assert.strictEqual(list.insert(3, "DBacks"), true);
assert.strictEqual(list.insert(0, "Marlins"), true);
// assertion for insert in the middle
list.insert(3, "Pirates");
assert(list.get(3).val === "Pirates");

// remove()
assert.strictEqual(list.remove(7), null);
assert(list.remove(3).val === 'Pirates');
assert(list.get(3).val === 'Dodgers');
assert(list.remove(0).val === 'Marlins');
assert(list.remove(3).val === 'DBacks');

// reverse()
assert.deepEqual(list.reverse()/*?*/, {
    length: 3,
    head: { val: 'Dodgers', next: { val: 'Rockies', next: { val: 'Buck', next: null } } },
    tail: { val: 'Buck', next: null }
});
/** End Unit Tests */

module.exports = SinglyLinkedList;