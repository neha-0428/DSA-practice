// Problem: Given a sorted array of integers, 
// return the indices of the two numbers such that they add up to a specific target. 
// You may not use the same element twice.

function pair(arr, target) {
    let left = 0
    let right = arr.length - 1

    while(left < right) {
        let sum = arr[left] + arr[right];

        if(sum === target) {
            return [left, right]
        } else if(sum < target) {
            left++
        } else {
            right--
        }
    }

    return [-1, -1]

}

console.log(pair([2, 7, 11, 15], 9))
console.log(pair([1, 3, 4, 6, 8, 10], 14))
console.log(pair([-5, -2, 0, 3, 7], 5))

