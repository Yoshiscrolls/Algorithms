const array = [1, 6, 7, 1, 41, 13, -3, 6, -9, 0, 13, 15, -7, 3];

let count = 0;

const quickSort = (array) => {
    if (array.length <= 1) {
        return array
    }
    let middleIndex = Math.floor(array.length / 2);
    let middle = array[middleIndex];
    let less = [];
    let greater = [];

    for (let i = 0; i < array.length; i++) {
        if (i === middleIndex)
            continue
        if (array[i] < middle) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }
    return [...quickSort(less), middle, ...quickSort(greater)]
}

const quick = (array) => {
    if (array.length <= 1) {
        return array
    }
    const middleIndex = Math.floor(array.length / 2)
    let middle = array[middleIndex]
    let greater = []
    let less = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] === middle)
            continue
        if (array[i] < middle) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }
    return [...quickSort(less), middle, ...quickSort(greater)]
}

const sort = (array) => {
    if (array.length < 1) {
        return array
    }
    let less = []
    let bigger = []
    let middleIndex = Math.floor(array.length / 2)
    let middle = array[middleIndex]

    for (let i = 0; i < array.length; i++) {
        if (array[i] === middle) {
            continue
        }
        if (array[i] < middle) {
            less.push(array[i])
        } else {
            bigger.push(array[i])
        }
    }
    return [...sort(less), middle, ...sort(bigger)]
}

const sortFn = (array) => {
    if (array.length <= 1) {
        return array
    }
    let middleIndex = Math.floor(array.length / 2)
    let middle = array[middleIndex]
    let less = []
    let bigger = []

    for (let i = 0; i < array.length; i++) {
        count += 1
        if (array[i] === middle) {
            continue
        }
        if (array[i] < middle) {
            less.push(array[i])
        } else {
            bigger.push(array[i])
        }
    }
    return [...sortFn(less), middle, ...sortFn(bigger)]
}

const newSortFn = (array) => {
    if (array.length <= 1) {
        return array
    }
    let middleIndex = Math.floor(array.length / 2)
    let middle = array[middleIndex]
    let less = []
    let bigger = []

    for (let i = 0; i < array.length; i++) {
        count += 1
        if (array[i] !== middle) {

            if (array[i] < middle) {
                less.push(array[i])
            } else {
                bigger.push(array[i])
            }
        }
    }
    return [...sortFn(less), middle, ...sortFn(bigger)]
}

const quickSortFn = (array) => {
    if (array.length <= 1) {
        return array
    }
    let middleIndex = Math.floor(array.length / 2)
    let less = []
    let bigger = []

    for (let i = 0; i < array.length; i++) {
        count += 1
        if (array[middleIndex] === array[i]) {
            continue
        }
        if (array[i] < array[middleIndex]) {
            less.push(i)
        } else {
            bigger.push(i)
        }
    }
    return [...quickSortFn(less), middleIndex, ...quickSortFn(bigger)]
}

const sortQuick = (array) => {
    if (array.length <= 1) {
        return array
    }

    let less = [];
    let bigger = [];
    let middleIndex = Math.floor(array.length / 2)
    let middle = array[middleIndex];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === middle) {
            continue
        }
        if (array[i] < middle) {
            less.push(array[i])
        } else {
            bigger.push(array[i])
        }
    }
    return [...sortQuick(less), middle, ...sortQuick(bigger)]
}

console.log(sortQuick(array))
console.log(count)
console.log(array.length)