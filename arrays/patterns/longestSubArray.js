// Longest subarray with sum ≤ k (rewrite yourself)

function longestSubArray(arr, k) {
    let left = 0
    let sum = 0
    let maxLen = 0

    for(let right = 0; right < arr.length; right++) {
        sum += arr[right]

        while(sum > k) {
            sum -= arr[left]
            left++
        }

        maxLen = Math.max(maxLen, right - left + 1)
    }

    return maxLen;

}

console.log(longestSubArray([4, 2, 1, 7, 8, 1, 2], 8))