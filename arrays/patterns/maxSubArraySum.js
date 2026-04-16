// Maximum sum of subarray of size k

function max(arr, k) {
    let windowSum = 0
    let maxSum = 0

    for(let i = 0; i < k; i++) {
        windowSum += arr[i]
    }

    maxSum = windowSum;

    for(let i=k; i<arr.length; i++) {
        windowSum = windowSum + arr[i] - arr[i-k]
        maxSum = Math.max(maxSum, windowSum)
    }

    return maxSum

}

console.log(max([1, 2, 3, 4, 6, 1, 2], 3))