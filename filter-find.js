const numbers = [-2, -4, 1, -5, 3, 9, 12];
const greaterThanZero = (number) => number > 0;

/* 
    Filter returns an array of all values that meet a certain condition.
    Expected: [1, 3, 9, 12]
*/
console.log(numbers.filter(greaterThanZero));

/*
    Find returns the first value that meets a certain condition
    Expected: 1
*/
console.log(numbers.find(greaterThanZero));