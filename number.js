let array = [9,9];
let array1 = [1,2,3,4,5,6,7,8,9];
let array2 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];

let lastSum = (arr) => {
    if (arr[arr.length - 1] === 9) {
        arr.pop()
        arr.push(1,0)
        return arr
    }
    arr[arr.length - 1] += 1
    return arr
};

console.log(lastSum(array));
console.log(lastSum(array2));