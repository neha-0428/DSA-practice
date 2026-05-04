// Remove Duplicates from Sorted Array
// Given a sorted array, remove duplicates in-place such that:
// Each element appears only once
// Return the new length
// First k elements should be unique

function removeDuplicates(arr) {
    let left = 0

    for ( let right = 1; right < arr.length; right++ ) {

        if ( arr[right] != arr[left] ) {
            arr[++left] = arr[right];
        }
    }

    return left + 1

}

console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
console.log(removeDuplicates([1,1,1,1]));
