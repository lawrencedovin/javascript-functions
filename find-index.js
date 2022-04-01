const array1 = [5, 12, 8, 130, 44];
const search = element => element > 13;
console.log(array1.findIndex(search));
// expected output: 3

const array2 = [
  { id: 1, dev: false },
  { id: 2, dev: false },
  { id: 3, dev: true }
];
const searchObj = obj => obj.dev === true;
console.log(array2.findIndex(searchObj));
// expected output: 2