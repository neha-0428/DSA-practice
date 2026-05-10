// Given an integer array nums
// and integer val,
// remove all occurrences of val in-place.
// Return:
// number of remaining elements
// Order of remaining elements does NOT matter.

function removeOccurences(arr, val) {
    let left = 0

    for (let right = 0; right < arr.length; right++) {

        if (arr[right] !== val) {
            arr[left] = arr[right]
            left++
        }
    }

    return left
}

console.log(removeOccurences([3,2,2,3], 3))
console.log(removeOccurences([0,1,2,2,3,0,4,2], 2))
