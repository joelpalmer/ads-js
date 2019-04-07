const assert = require('assert');
// O(nk)
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            digitBuckets[getDigit(nums[i], k)].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);

    }
    return nums;
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
// radixSort()
assert.deepEqual(radixSort([4, 1, 3, 2]), [1, 2, 3, 4]);
assert.deepEqual(radixSort([40, 1, 3, 2]), [1, 2, 3, 40]); //?.$
/** End Unit Tests **/

module.exports = radixSort;