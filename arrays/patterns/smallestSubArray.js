// Smallest subarray ≥ k

function smallestSubArray(arr, k) {
    let left = 0
    let sum = 0
    let minLen = Infinity

    for(let right = 0; right < arr.length; right++) {
        sum += arr[right]

        while(sum >= k) {
            minLen = Math.min(minLen, right - left + 1)
            sum -= arr[left]
            left++
        }

    }

    // return minLen => if no subArray better return it 0
    return minLen === Infinity ? 0 : minLen;

}

console.log(smallestSubArray([4, 2, 1, 7, 8, 1, 2], 8))