


function remove(arr, target) {

    arr = arr.sort((a, b) => a - b)

    let left = 0
    
    for (let right = 1; right < arr.length; right++) {

        if(arr[right] !== arr[left]) {
            arr[++left] = arr[right]
        }

    }

    return left+1

}

console.log(remove([3,2,2,3], 3))
console.log(remove([0,1,2,2,3,0,4,2], 2))
