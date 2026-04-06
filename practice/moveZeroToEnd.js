// Problem: Move all 0s to the end of the array 
// while maintaining the relative order of the non-zero elements.

function moveZero(arr) {
    let left = 0

    for(let right = 0; right < arr.length; right++) {


        // This too is correct but we have a much cleaner solution
        // if(arr[right] !== 0) {
        //     let temp = arr[right]
        //     arr[right] = arr[left]
        //     arr[left] = temp
        //     left++
        // }

        if(arr[right] !== 0) {
            arr[left] = arr[right]
            left++
        }
    }

    for(let i = left; i < arr.length; i++) {
        arr[i] = 0
    }

    return arr

}

let arr = [0, 1, 0, 3, 12, 0]
let arr2 = [0, 0, 0, 3, 12, 0]
let arr3 = [0, 0, 0, 0, 0]
let arr4 = [1, 0, 1, 0, 0]
let arr5 = [1, 0, 1, 0, 0, 1]
let arr6 = [1, 0, 1]
console.log(moveZero(arr))
console.log(moveZero(arr2))
console.log(moveZero(arr3))
console.log(moveZero(arr4))
console.log(moveZero(arr5))
console.log(moveZero(arr6))