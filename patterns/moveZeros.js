// moveZeros

function moveZero(arr) {
    let left = 0

    for(let right = 0; right < arr.length; right++) {
        if(arr[right] !== 0) {
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
            left++
        }
        
    }

    return arr

}

console.log(moveZero([2, 0, 5, 0, 3, 4]))
console.log(moveZero([0, 1, 0, 0, 3, 4, 0]))
console.log(moveZero([2, 0, 5, 0, 3]))