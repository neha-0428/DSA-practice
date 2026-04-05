// Problem: You must delete exactly one element. Return the longest subarray of 1's remaining.

function longestSubArray(arr, k) {
    let left = 0
    let maxLen = 0
    let right = 0
    let zeroCount = 0
    let zeroIndex = 0
    let previousZeroIndex = 0
    
    for(let i = 0; i < arr.length; i++) {
        
        if(arr[i] === 0) {
            zeroCount++
            previousZeroIndex = zeroIndex
            zeroIndex = i
        }

        if(zeroCount > k) {
            left = previousZeroIndex + 1
        }

        maxLen = Math.max(maxLen, right - left + 1)
        right++
    }

    return maxLen

}

let arr = [1, 1, 1, 0, 1, 1, 1, 0, 1]
let arr2 = [0, 1, 1, 1, 0, 1, 1, 1, 0, 1]
let arr3 = [0, 1, 1, 1, 0, 0, 1, 1, 0, 1]
let arr4 = [1, 1, 0, 0, 0, 0, 1, 0, 0, 1]
console.log(longestSubArray(arr, 1))
console.log(longestSubArray(arr2, 1))
console.log(longestSubArray(arr3, 1))
console.log(longestSubArray(arr4, 1))