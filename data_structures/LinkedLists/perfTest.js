const SinglyLinkedList = require('./singlyLinkedList');
// array vs. singly linked list
// push()
const ssl = new SinglyLinkedList();
const arr = new Array();

arr.push("Sebastian");//?.
ssl.push("Sebastian");//?.

arr.push("Michelle");//?.
ssl.push("Michelle");//?.

arr.push("William");//?.
ssl.push("William");//?.

arr;
ssl;

// pop()
arr.pop();//?.$
ssl.pop();//?.$

// shift()
// bootstrap (put this popped item back for the tests)
arr.push("William");//?.
ssl.push("William");//?.
arr;
ssl;
arr.shift();//?.$
ssl.shift();//?.$