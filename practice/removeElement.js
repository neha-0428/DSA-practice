// Problem: Given an array nums and a value val, remove all occurrences of val in-place. 
// The order of elements can be changed.

function removeElement(arr, val) {
    let left = 0
    
    for(let right = 0; right < arr.length; right++) {
        if(arr[left] === val && arr[right] !== val) {
            let temp = arr[right]
            arr[right] = arr[left]
            arr[left] = temp
            left++
        }
    }

    arr.length = left

    return arr;

}

let arr = [3, 2, 2, 3, 5, 6];
console.log(removeElement(arr, 3))