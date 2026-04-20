// Problem: Given an integer array nums, move all 0's to the end of it
//  while maintaining the relative order of the non-zero elements. 
// You must do this in-place without making a copy of the array.

function shiftZeros(arr) {
    let left = 0

    for(let right = 0; right < arr.length; right++) {

        // if right !== 0, then left too will !== 0 so both move together if right !== 0
        if(arr[right] !== 0) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
        }
    }

    return arr


}

console.log(shiftZeros([0, 1, 0, 3, 12]))
console.log(shiftZeros([0]));
console.log(shiftZeros([4, 5, 0, 0, 2]));

