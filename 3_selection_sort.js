const array = [0, -3, 1, 10, 15, -9, 1, 5, 6, 1, -1, 19]

let count = 0;

const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j;
            }
            let tmp = array[i];
            array[i] = array[indexMin];
            array[indexMin] = tmp
        }
    }
    return array
}

const selection = (array) => {
  for (let i = 0; i < array.length; i++) {
      let indexMin = i
      for ( let j = i + 1; j < array.length; j++) {
          count += 1
          if (array[j] < array[indexMin]) {
              indexMin = j
          }
      }
      let tmp = array[i]
      array[i] = array[indexMin]
      array[indexMin] = tmp
  }
  return array
}

const sort = (array) => {
    for ( let i = 0; i < array.length; i++) {
        let indexMin = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j
            }
        }
        let tmp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp

    }
    return array
}

const selectionFn = (array) => {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                let tmp = array[i]
                array[i] = array[j]
                array[j] = tmp
            }
        }
    }
    return array
}

console.log(selectionFn(array))
console.log(count)