// Problem: Replace every number with the sum of the next k numbers. 

// this is classic circular sliding window


function replace(arr, k) {
    // let left = 0
    let windowSum = 0
    let result = []

    for(let right = 1; right < k + 1; right++) {
        windowSum += arr[right]
    }

    result[0] = windowSum
    // left++

    for(let right = 1; right < arr.length; right++) {
        
        let index = (right + k) % arr.length;
        
        windowSum += arr[index]
        windowSum -= arr[right]
        // left++
        
        result[right] = windowSum
    }

    return result;
   
}

let arr = [5, 7, 1, 4, 5]
let arr1 = [5, 7, 1, 4]
console.log(replace(arr, 3))
console.log(replace(arr1, 3))

