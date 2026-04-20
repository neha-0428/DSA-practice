// Problem: Given an integer array nums, move all 0's to the end of it
//  while maintaining the relative order of the non-zero elements. 
// You must do this in-place without making a copy of the array.

function shiftZeros(arr) {
    let left = 0

    for(let right = 1; right < arr.length; right++) {

        if(arr[right] !== 0 && arr[left] === 0) {
            arr[left] = arr[right]
            arr[right] = 0
            left++
        } else if (arr[left] !== 0){
            left++
        }
    }

    return arr


}

console.log(shiftZeros([0, 1, 0, 3, 12]))
console.log(shiftZeros([0]));
console.log(shiftZeros([4, 5, 0, 0, 2]));

