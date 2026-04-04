// Problem: Find the minimal length of a contiguous subarray 
// of which the sum is $\geq$ target. If there isn't one, return 0.

function minSize(arr, target) {
    let left = 0
    let minLen = Infinity
    let windowSum = 0
    
    for(let right = 0; right < arr.length; right++) {
        windowSum += arr[right];

        while(windowSum > target) {
            windowSum -= arr[left]
            left++
        }

        if(windowSum === target) {
            minLen = Math.min(minLen, right - left + 1)
        }
    }

    return minLen
}

let arr = [2, 3, 1, 2, 4, 3]
console.log(minSize(arr, 7))