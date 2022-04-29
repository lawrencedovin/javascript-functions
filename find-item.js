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

let findPersonByName = (name) => {
    const foundPerson = people.filter((person) => person.name === name);
    if(foundPerson.length === 0) return `Person: ${name} not found`; 
    if(foundPerson) return foundPerson[0];
}

console.log(findPersonByName('Rick Williams'));
console.log(findPersonByName('Lawrence Dovin'));

let findAnimal = (name) => {
    const foundAnimal = animals.filter((animal) => animal === name)
    if(foundAnimal.length === 0) return `Animal: ${name} not found`;
    if(foundAnimal) return foundAnimal;
}

console.log(findAnimal('Chicken'));
console.log(findAnimal('horse'));