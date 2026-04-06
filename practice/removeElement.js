// Problem: Given an array nums and a value val, remove all occurrences of val in-place. 
// The order of elements can be changed.

// right pointer moves
// left pointer checks
// if arr[right] is valid, move it to left, or else move left

function removeElement(arr, val) {
    let left = 0

    for(let right = 0; right < arr.length; right++) {
        if(arr[right] !== val) {
            let temp = arr[right]
            arr[right] = arr[left]
            arr[left] = temp
            left++
        }
    }

    arr.length = left
    return arr
}

let arr = [3, 2, 2, 3, 5, 6, 4];
let arr2 = [2, 2, 3]
let arr3 = [2, 2, 3, 4]
console.log(removeElement(arr, 3))
console.log(removeElement(arr2, 3))
console.log(removeElement(arr3, 3))