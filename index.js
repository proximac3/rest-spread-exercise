const filterOutOdds = (...nums) => {
    return nums.filter(elem => elem % 2 !== 0)
};

const findMin = (...args) => {
    return Math.min(...args)
}

const mergeObject = (obj1, obj2) => {
    return {...obj1, ...obj2}
}

const doubleAndReturnArgs = (arr, ...args) => {
    return [...arr,...args.map(elem => elem *2)]
}


/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = items => {
    let result = [...items]
    result.splice(Math.floor(Math.random() * result.length - 1), 1)
    return result
}



/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2]


/** Return a new object with all the keys and values
from obj and a new key/value pair */
 
const addKeyVal = (obj, key, val) => ({...obj, occupation:val})


/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
    const result = { ...obj }
    delete result[key]
    return result
}



/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => ({...obj1, ...obj2})


/** Return a new object with a modified key and value. */
const update = (obj, key, val) => {
    const result = { ...obj}
    result[key] = val
    return result
}
