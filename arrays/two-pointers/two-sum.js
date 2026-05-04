// You are given a sorted array of integers.
// Find two numbers such that they add up to a target.
// Return their indices (1-based).
// You must use O(1) extra space.

function twoSum(arr, target) {
    let left = 0
    let right = arr.length - 1

    while ( left < right ) {
        let sum = arr[left] + arr[right]

        if ( sum === target ) {
            return [left + 1, right + 1]
        } 

        if ( sum < target ) {
            left++
        } else {
            right--;
        }
    }

    return [-1, -1];

}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([1, 2, 3, 4, 6], 6))
console.log(twoSum([-3, -1, 0, 2, 4], 1))
