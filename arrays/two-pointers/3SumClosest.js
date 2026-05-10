// Given an integer array nums
// and integer target,
// return the sum of the 3 integers
// such that the sum is closest to target.

function closest(arr, target) {

    if(arr.length < 3) return

    arr = arr.sort((a, b) => a - b)
    let closest = 0
    let distance = Infinity
    console.log(arr, 'sorted arr')
    
    for(let k = 0; k < arr.length - 2; k++) {
        
        let left = k + 1
        let right = arr.length - 1

        
        while (left < right) {
            
            let currentSum = arr[k] + arr[left] + arr[right]

            if (currentSum === target) {
                return currentSum
            }
            
            let currDistance = Math.abs(currentSum - target)
            
            if(distance > currDistance) {
                distance = currDistance
                closest = currentSum
            }
            
            if(currentSum < target) {
                left++
            } else {
                right--
            }
        }
    }
    
    return closest

}

console.log(closest([-1,2,1,-4], 1))
console.log(closest([0,0,0], 1))
console.log(closest([1,1,1,0], -100))