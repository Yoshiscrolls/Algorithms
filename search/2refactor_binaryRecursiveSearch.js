const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let count = 0

const recursiveBinarySearch = (array, item, start, end) => {
    let middle = Math.floor( (start + end) / 2);
    count += 1

    if (array[middle] === item) {
     return middle
    }
    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, start, middle - 1)
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end)
    }
}

const newRecursiveBinarySearch = (array, item, start, end) => {
    let middle = Math.floor( (start + end) / 2)
    count += 1

    if (array[middle] === item) {
        return middle
    }
    if (item < array[middle]) {
        return newRecursiveBinarySearch(array, item, start, middle - 1)
    } else {
        return newRecursiveBinarySearch(array, item, middle + 1, end)
    }
}

console.log(newRecursiveBinarySearch(array, 13, 0, array.length))
console.log(count)