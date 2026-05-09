// Move all 0s to the end while maintaining order of non-zero elements.
// Do it in-place.

function moveZero(arr) {
    let left = 0;

    for( let right = 0; right < arr.length; right++ ) {
        if(arr[right] !== 0) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
        }
    }

    return arr;

}

console.log(moveZero([0,1,0,3,12]))
console.log(moveZero([0,0,1]))
console.log(moveZero([1,2,3]));
