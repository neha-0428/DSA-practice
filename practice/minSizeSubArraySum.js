// Problem: Find the minimal length of a contiguous subarray 
// of which the sum is $\geq$ target. If there isn't one, return 0.

function minSize(arr, target) {
    let left = 0
    let minLen = Infinity
    let windowSum = 0
    
    for(let right = 0; right < arr.length; right++) {
        windowSum += arr[right];

        while(windowSum >= target) {
            minLen = Math.min(minLen, right - left + 1)
            windowSum -= arr[left]
            left++
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

let arr = [2, 3, 1, 2, 4, 3]
let arr2 = [2, 7, 1, 4, 3]
console.log(minSize(arr, 7))
console.log(minSize(arr2, 7))