// Problem: Given a binary array nums and an integer k, 
// return the maximum number of consecutive 1s if you can flip at most k 0s.

function maxConsecutive(arr, k) {
    let left = 0
    let maxLen = 0
    let zeroCount = 0
    let right = 0

    for(let i = 0; i < arr.length; i++) {

        if(arr[right] === 0) {
            zeroCount++;
        }

        if(zeroCount > k) {
            zeroCount = 0
            left = right - 1
            right = right - 1            
        }

        maxLen = Math.max(maxLen, right - left + 1)
        right++
    }

    return maxLen
}

let arr = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
let arr2 = [1, 1, 1, 1, 0, 0, 0, 1]
let arr3 = [1, 1, 0, 1, 0, 0, 0, 1]
let arr4 = [1, 1, 0, 1, 1, 0, 1, 1, 0]
console.log(maxConsecutive(arr, 2))
console.log(maxConsecutive(arr, 3))
console.log(maxConsecutive(arr2, 2))
console.log(maxConsecutive(arr3, 2))
console.log(maxConsecutive(arr4, 2))