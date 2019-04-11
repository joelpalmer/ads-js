const SinglyLinkedList = require('./singlyLinkedList');
const DoublyLinkedList = require('./doublyLinkedList');
/* array vs. singly linked list */
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

// get() seems a little faster than indexing
sll.get(2);//?.$
arr[2];//?.$

// set() faster 🤔
sll.set(2, "Dodgers");//?.$
arr[2] = "Dodgers"; //?.$

// insert()
sll.insert(3, "Seager"); //?.$
arr.splice(3, 0, "Seager");//?.$

// remove()
sll.remove(3);//?.$
arr.splice(3, 1);//?.$

// reverse()
arr.reverse();//?.$
sll.reverse();//?.$

/* array vs. singly linked list vs. double linked list */
const dll = new DoublyLinkedList();//?.$
// get dll caught up in length & test first/second push performance
dll.push("James"); //?.
dll.push("Joel"); //?.
dll.push("Janie"); //?.
dll.push("Jesse"); //?.

// push()
dll.push("Jacob"); //?.
sll.push("James"); //?.
arr.push("James"); //?.

// pop()
dll.pop(); //?.$
sll.pop(); //?.$
arr.pop(); //?.$

// shift()
dll.shift(); //?.$
sll.shift(); //?.$
arr.shift(); //?.$

// unshift()
dll.unshift(); //?.
sll.unshift(); //?.
arr.unshift(); //?.