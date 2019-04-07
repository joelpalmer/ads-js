const bubbleSort = require('./bubble');
const selectionSort = require('./selection');
const insertionSort = require('./insertion');
const mergeSort = require('./merge');
const qSort = require('./quick');
const nums = Array.from({length: 40000}, () => Math.floor(Math.random() * 41));
const nums2 = [...nums];
const nums3 = [...nums];
const nums4 = [...nums];
const nums5 = [...nums];
bubbleSort(nums); //?.$
selectionSort(nums2); //?.$
insertionSort(nums3); //?.$
mergeSort(nums4); //?.$
qSort(nums5); //?.$
