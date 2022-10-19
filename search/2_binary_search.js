const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let count = 0;

const binarySearch = (array, item) => {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;
    while (found === false && start <= end) {
        count += 1;
        middle = Math.floor((start + end) / 2);
        if (array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1
        }
    }
    return position;
}

const binary = (array, item) => {
    let start = 0;
    let end = array.length;
    let middle
    let found = false;
    let position = -1;

    while (found === false && end <= end) {
        count += 1
        middle = Math.floor((start + end) / 2)
        if (array[middle] === item) {
            found = true
            position = middle
            return position
        }
        if (array[middle] < item) {
            start = middle + 1
        } else {
            end = middle - 1
        }
    }
    return position
}

const search = (array, item) => {
    let start = 0;
    let end = array.length
    let middle;
    let found = false;
    let position = -1;

    while (found === false && start <= end) {
        middle = Math.floor((start + end) / 2)
        count += 1

        for (let i = 0; i < array.length; i++) {
            if (item === array[middle]) {
                found = true
                position = middle
                return position
            }
            if (array[middle] < item) {
                start = middle + 1
            } else {
                end = middle - 1
            }
        }
    }
    return position
}

const binaryFn = (array, item) => {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;

    while (found === false && start <= end) {
        middle = Math.floor((start + end) / 2)
        for (let i = 0; i < array.length; i++) {
            if (array[middle] === item) {
                found = true
                position = middle
                return position
            }
            if (array[middle] < item) {
                start = middle + 1
            } else {
                end = middle - 1
            }
        }
    }
    return position
}

const binarySearchFn = (array, item) => {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;

    while (found === false && start <= end) {
        middle = Math.floor((start + end) / 2)
        count += 1

        for (let i = 0; i < array.length; i++) {
            if (array[middle] === item) {
                found = true
                position = item
                return position
            }
            if (array[middle] < item) {
                start = middle + 1
            } else {
                end = middle - 1
            }
        }
    }
    return position
}

const finalBinary = (array, item) => {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;

    do {
       middle = Math.floor( (start + end) / 2)
        count += 1

        for (let i = 0; i < array.length; i++) {
            if (array[i] === item) {
                found = true
                position =  array[i]
                return position
            }
            if (array[i] < item) {
                start = middle + 1
            } else {
                end = middle - 1
            }
        }
    } while (found === false && start <= end)
    return  position
}

console.log(finalBinary(array, 15))
console.log(count);

