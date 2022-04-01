const posts = [
    { id: 1, title: "Sample Title 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { id: 2, title: "Sample Title 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { id: 3, title: "Sample Title 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
  ];
  // ES2016+
  // Create new array of post IDs. I.e. [1,2,3]
  const postIds = posts.map((post) => post.id);
  // Create new array of post objects. I.e. [{ id: 1, title: "Sample Title 1" }]
  const postSummaries = posts.map((post) => ({ id: post.id, title: post.title }));
  

const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

const kvArray = [{ key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 }];

const reformattedArray = kvArray.map(({ key, value}) => ({ [key]: value }));

// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]

const numbers = [1, 4, 9];
const doubles = numbers.map((num) => num * 2);

// doubles is now   [2, 8, 18]
// numbers is still [1, 4, 9]