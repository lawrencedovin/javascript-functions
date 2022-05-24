let arr = ['foo', 'bar', 10, 'qux'];

// arr.splice(<index>, <steps>, [elements ...]);

arr.splice(1, 1);			// Removes 1 item at index 1
// => ['foo', 10, 'qux']

arr.splice(2, 1, 'tmp');	// Replaces 1 item at index 2 with 'tmp'
// => ['foo', 10, 'tmp', 'qux']

arr.splice(0, 1, 'x', 'y');	// Inserts 'x' and 'y' replacing 1 item at index 0
// => ['x', 'y', 10, 'tmp']