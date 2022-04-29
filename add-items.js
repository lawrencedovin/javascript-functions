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

function addAnimal(animal) {
    animals = [...animals, animal];
    return animals;
}

console.log(addAnimal('fish'));
console.log(animals);

function addPerson(person) {
    if(person.name && person.phone && person.age) {
        if(typeof(person.age) === 'number' && typeof(person.name) === 'string' && typeof(person.phone) === 'string'){
            people = [...people, person];
            return people;
        }
        else {
            throw new Error('Data type passed in is incorrect requires age: number, name: string, phone: string');
        }
    }
    else {
        throw new Error('Person requires age: number, name: string, phone: string');
    }
}

let newPerson = {
    name: 'New Person',
    phone: '413-213-5423',
    age: 55
};

console.log(addPerson(newPerson));
console.log(addPerson('newPerson'));
console.log(people);