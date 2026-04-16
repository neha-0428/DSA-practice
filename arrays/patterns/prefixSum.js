// Build prefix array
// 👉 Find sum of given range (L, R)

function buildPrefix(arr) {
    let prefix = []
    prefix[0] = arr[0]

    for(let i=1; i<arr.length; i++) {
        prefix[i] = prefix[i-1] + arr[i]
    }

    return prefix;
}

function sumOfRange(prefix, left, right) {
    if(left === 0) {
        return prefix[right]
    }

    return prefix[right] - prefix[left - 1];
}

let arr = [3, 1, 4, 2, 5];
let prefix = buildPrefix(arr);

console.log(sumOfRange(prefix, 1, 3))
console.log(sumOfRange(prefix, 0, 3))