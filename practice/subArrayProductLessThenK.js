// Problem: Count the number of contiguous subarrays
// where the product of all elements is strictly less than k.

function subArraysCount(arr, target) {
    let left = 0
    let windowProduct = arr[0]
    let count = 0

    for(let right = 1; right < arr.length; right++) {
        windowProduct *= arr[right]

        while(windowProduct >= target || (right >= arr.length - 1 && left < arr.length - 1)) {
            if(arr[left] < target) {
                count++
            }

            if(windowProduct < target) {
                count++
            }


            windowProduct = windowProduct / arr[left]
            left++
        }


        count++; 
    
    }

    return count;
    
}

let arr = [10, 5, 2, 6]
let arr1 = [10, 5, 2]
let arr2 = [5, 2, 6]
console.log(subArraysCount(arr, 100))
console.log(subArraysCount(arr1, 100))
console.log(subArraysCount(arr2, 100))