let animals = ['horse', 'dog', 'cat', 'bird'];
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

const deleteAnimalByName = (name) => {
    let foundName = animals.filter((animal) => animal === name)[0];
    animals = animals.filter((animal) => animal !== name);
    foundName ? console.log(`${name} successfully deleted!`) : console.log(`${name} does not exist.`);
    return animals;
}

console.log(deleteAnimalByName('horse'));
console.log(deleteAnimalByName('Chicken'));

const deletePersonByName = (name) => {
    let foundName = people.filter((person) => person.name === name)[0];
    people = people.filter((person) => person.name !== name);
    foundName ? console.log(`${name} successfully deleted!`) : console.log(`${name} does not exist.`)
    return people;
}

console.log(deletePersonByName('Lawrence Dovin'));
console.log(deletePersonByName('Chicken'));