// Problem: Find the maximum sum of any contiguous subarray of size k.

function maxSum(arr, k) {
    let left = 0;
    let windowSum = 0;
    let maxSum = 0;

    for(let right = 0; right < k; right++) {
        windowSum += arr[right]
    }

    maxSum =  Math.max(maxSum, windowSum)

    for(let right = k; right < arr.length; right++) {
        windowSum += arr[right]
        windowSum -= arr[left]
        left++

        maxSum = Math.max(maxSum, windowSum)
    }

    return maxSum

} 

let arr = [2, 7, 5, 1, 3, 2]
console.log(maxSum(arr, 3))