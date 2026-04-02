// Remove Duplicates from Sorted Array
// Problem: Given a sorted array, 
// remove duplicates in-place so each unique element appears only once.

function removeDuplicates(arr) {
    let left = 0

    for(let right = 1; right < arr.length; right++) {
        if(arr[left] !== arr[right]) {
            arr[left + 1] = arr[right]
            left++
        }        
    }

    arr.length = left + 1

    return arr

}

let arr = [1, 1, 2, 2, 2, 4, 5, 5, 7, 7, 8]
console.log(removeDuplicates(arr))