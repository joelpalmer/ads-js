// multiple pointers

function countUniqueValues(arr) {
	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
		
    }
    return i + 1;
}

const arr1 = [1, 1, 2, 3, 3, 4, 5, 6, 6, 7].sort();
const arr2 = [1, 1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9].sort();
const arr3 = [1, 1, 2, 3, 3, 4, 5, 6, 6, 7, 9, 9].sort();

countUniqueValues(arr1); //?.$
countUniqueValues(arr2); //?
countUniqueValues(arr3); //?
