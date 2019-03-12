// multiple pointers

const sortedArray = [1, 5, 6, -2, 4, -3, 2].sort();
const sortedArray2 = [1, 9, 6, 5, 4, -9, 2].sort();
const sortedArray3 = [1, 8, 6, 7, 4, -3, 2].sort();

sortedArray;
sortedArray2;
sortedArray3;

function sumZero(arr) {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
}

sumZero(sortedArray); //?
sumZero(sortedArray2); //?
sumZero(sortedArray3); //?
