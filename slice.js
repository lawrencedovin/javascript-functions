// array.slice(start, end)
const FRUITS = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = FRUITS.slice(1, 3);
// citrus => [ 'Orange', 'Lemon' ]

// Negative values slice in the opposite direction
var fromTheEnd = FRUITS.slice(-3, -1);
// fromTheEnd => [ 'Lemon', 'Apple' ]