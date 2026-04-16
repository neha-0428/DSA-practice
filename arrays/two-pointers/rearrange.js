
// Given an array arr[] consisting of only 0's and 1's. 
// Modify the array in-place to segregate 0s onto the left side and 1s onto the right side of the array.
function rearrange(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        while (arr[left] === 0 && left < right) left++;
        while (arr[right] === 1 && left < right) right--;

        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr;
}

console.log(rearrange([0, 1, 0, 1, 0, 0, 1, 1, 1, 1]));
console.log(rearrange([0, 1, 0, 1, 0, 0, 1, 1, 1, 0]));
console.log(rearrange([1, 1, 0, 1, 0, 0, 1, 1, 1, 0]));
console.log(rearrange([1, 1, 0, 1, 0, 0, 1, 1, 1, 1]));