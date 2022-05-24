let animals = ['horse', 'dog', 'cat', 'bird', 'horse'];
let people = [
    {
        name: 'Lawrence Dovin',
        phone: '610-579-1888',
        age: 29
    },
    {
        name: 'Ryan Philips',
        phone: '610-514-1238',
        age: 24
    },
    {
        name: 'Julie Paez',
        phone: '610-555-0923',
        age: 26
    },
    {
        name: 'Mary Ann',
        phone: '610-110-2133',
        age: 34
    }
];

// Delete an item based on the name
// const deleteAnimalByName = (name) => {
//     // Find If name exists through looping array if not then return name not found
//     const foundName = animals.filter((animal) => animal === name)[0];
//     if(!foundName) return `Animal ${name} does not already exist in array.` 
//     // If Name exists through looping array remove it from Array and return name deleted along with the newely updated Array.
//     // animals = animals.filter((animal) => animal !== foundName)
//     // return `Animal ${name} has been successfully deleted! Update animals: ${animals}`;
//     for (let i = 0; i < animals.length; i++) {
//         if(animals[i] === foundName) {
//             animals.splice(i, 1);
//             return `Animal ${name} has been successfully deleted! Updated animals: ${animals}`;
//         }
//     }
// }

// console.log(deleteAnimalByName('horse'));
// console.log(deleteAnimalByName('chicken'));

const deletePersonByName = (name) => {
    // loop through people object's name properties checking if the person.name === name
    const foundName = people.filter((person) => person.name === name)[0];
    // if none of the person.name === name return name doesn't exist
    if(!foundName) return `Person with the name of: ${name} doesn't exist.`;
    // if person.name === name does exist then delete the person
    people = people.filter((person) => person.name !== name);
    return `Person with the name of: ${name} has been successfully deleted! Updated people: ${people.map(person => person.name)}.`;
}

console.log(deletePersonByName('Lawrence Dovin'));
console.log(deletePersonByName('Chicken Little'));