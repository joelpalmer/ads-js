const SinglyLinkedList = require('./singlyLinkedList');
// array vs. singly linked list
// push()
const sll = new SinglyLinkedList();
const arr = new Array();

arr.push("Sebastian");//?.
sll.push("Sebastian");//?.

arr.push("Michelle");//?.
sll.push("Michelle");//?.

arr.push("William");//?.
sll.push("William");//?.

arr;
sll;

// pop()
arr.pop();//?.$
sll.pop();//?.$

// shift()
// bootstrap (put this popped item back for the tests)
arr.push("William");//?.
sll.push("William");//?.
arr;
sll;
arr.shift();//?.$
sll.shift();//?.$

// bootstrap (put this shifted item back for the tests, order doesn't matter here)
arr.push("Sebastian");//?.
sll.push("Sebastian");//?.

// unshift() - this is where linked list could outperform array on large lists
// But, this isn't a useful test for several obvious reasons
arr.unshift("Dusty");//?.
sll.unshift("Dusty");//?.
sll;
arr;