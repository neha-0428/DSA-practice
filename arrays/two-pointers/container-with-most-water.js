// Given an array height[], where each element represents height of a line,
// Find two lines such that they form a container that holds the maximum water.

// brute force
function containerWithMostWater(arr) {
    let atMostContainer = 0
    
    for (let i = 0; i < arr.length; i++) {

        for(let j = i+1; j < arr.length; j++) {

            let min = Math.min(arr[i], arr[j])
            atMostContainer = Math.max(atMostContainer, (min * (j - i)));
        }
    }

    return atMostContainer;


}

function containerWithMostWater2 (arr) {
    let atMostContainer = 0

    let left = 0
    let right = arr.length - 1

    while (left < right) {

        let width = right - left
        let height = Math.min(arr[left], arr[right])

        atMostContainer = Math.max(atMostContainer, (height * width))

        if(arr[left] < arr[right]) {
            left++
        } else {
            right--
        }
    }

    return atMostContainer;

} 

console.log(containerWithMostWater([1,8,6,2,5,4,8,3,7]))
console.log(containerWithMostWater([1,1]))
console.log(containerWithMostWater([4,3,2,1,4]))
console.log(containerWithMostWater2([1,8,6,2,5,4,8,3,7]))
console.log(containerWithMostWater2([1,1]))
console.log(containerWithMostWater2([4,3,2,1,4]))