const array = [1, 2, 5, 10, 4, 8, 6, 7, 16]

const findFn = (array, item) => {
    for ( let i = 0; i < array.length; i++) {
        if ( array[i] === item) {
            return i
        }
    }
    return null
}

const linearSearch = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i
        }
    }
    return null
}

const linear = (array, item) => {
    for ( let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return array[i]
        }
    }
    return null
}

const search = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return item
        }
    }
    return null
}


const linearFn = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return array[i]
        }
    }
    return null
}

console.log(linearFn(array, 8))