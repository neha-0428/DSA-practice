// Count subArray with sum = k with prefix sum
// I want to know if removing k from current sum gives me a past sum

function count(arr, k) {
    let map = {0 : 1}
    let sum = 0;
    let count = 0

    for(let num of arr) {
        sum += num;
        console.log(sum, 'sum')

        if(map[sum - k]) {
            count += map[sum - k]
            console.log(sum - k, map, count)
        }

        map[sum] = (map[sum] || 0) + 1
        console.log(map, 'after')
    }

    return count;

}

// console.log(count([1, 2, 3], 3))
console.log(count([4, 2, 5], 4))