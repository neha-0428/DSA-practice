// Problem: Find the maximum sum of any contiguous subarray of size k.

function maxSum(arr, k) {
    if(arr.length < k) return null

    let left = 0
    let windowSum = 0
    let maxSum = -Infinity
    
    for(let right = 0; right < k; right++) {
        windowSum += arr[right]
    }

    maxSum = Math.max(maxSum, windowSum)

    for(let right = k; right < arr.length; right++) {
        windowSum += arr[right]

        windowSum -= arr[left]
        left++

        maxSum = Math.max(maxSum, windowSum)
    }

    return maxSum === -Infinity ? 0 : maxSum;
} 

let arr = [2, 7, 5, 1, 3, 2]
console.log(maxSum(arr, 3))