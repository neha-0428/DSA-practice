// Remove Duplicates from Sorted Array
// Problem: Given a sorted array, 
// remove duplicates in-place so each unique element appears only once.

function removeDuplicates(arr) {
    if(arr.length === 0) return [];
    let left = 0

    for(let right = 1; right < arr.length; right++) {
        if(arr[left] !== arr[right]) {
            left++
            arr[left] = arr[right]
        }        
    }

    arr.length = left + 1

    return arr

}

let arr = [1, 1, 2, 2, 2, 4, 5, 5, 7, 7, 8]
let arr2 = [1, 1, 2, 2]
let arr3 = [1, 1]
console.log(removeDuplicates(arr))
console.log(removeDuplicates(arr2))
console.log(removeDuplicates(arr3))