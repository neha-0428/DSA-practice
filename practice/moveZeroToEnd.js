// Problem: Move all 0s to the end of the array 
// while maintaining the relative order of the non-zero elements.

function moveZero(arr) {
    let left = 0

    for(let right = 0; right < arr.length; right++) {
        if(arr[left] === 0 && arr[right] !== 0) {
            let temp = arr[right]
            arr[right] = 0
            arr[left] = temp
            left++;
        }
    }

    return arr

}

let arr = [0, 1, 0, 3, 12, 0]
console.log(moveZero(arr))