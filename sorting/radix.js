const assert = require('assert');
function radixSort(arr) {
    return arr;
}

function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
    if (num === 0) {
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

/** Unit Tests **/
// getDigit()
assert(getDigit(4567, 3) === 4);//?.$
assert(getDigit(4567, 2) === 5);
// digitCount()
assert(digitCount(123) === 3);
assert(digitCount(0) === 1);
assert(digitCount(4747) === 4);
// mostDigits()
assert(mostDigits([1, 22, 333, 4444]) === 4);
assert(mostDigits([1, 22, 333, 4444, 55555]) === 5);
/** End Unit Tests **/

module.exports = radixSort;