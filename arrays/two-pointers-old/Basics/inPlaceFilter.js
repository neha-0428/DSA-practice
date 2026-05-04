// Problem: Given a sorted array, 
// remove the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same. 
// Return the number of unique elements.

function uniqueCount(arr) {
    let left = 0
    
    for(let right = 1; right < arr.length; right++) {
        
        if(arr[right] !== arr[left]) {
            arr[++left] = arr[right]
        }
    }

    arr.length = left + 1;
    return [left+1, arr];

}

console.log(uniqueCount([1, 1, 2]))
console.log(uniqueCount([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(uniqueCount([1, 2, 3]));