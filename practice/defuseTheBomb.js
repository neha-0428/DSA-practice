// Problem: Replace every number with the sum of the next k numbers. 

// this is classic circular sliding window

function replace(arr, k) {
    let left = 1;
    let result = []
    let windowSum = 0;
    let n = arr.length;
    let right = left + k;

    for(let i = 1; i <= k; i++) {
        windowSum += arr[i]
    }

    result[0] = windowSum;

    for(let i = 1; i < n; i++) {

        if (right >= n) {
            right = ( i + (n + k)) % n;
        }

        windowSum += arr[right]
        windowSum -= arr[left]
        right++
        left++

        result[i] = windowSum
    }

    return result;


}

let arr = [5, 7, 1, 4, 5]
let arr1 = [5, 7, 1, 4]
console.log(replace(arr, 3))
console.log(replace(arr1, 3))