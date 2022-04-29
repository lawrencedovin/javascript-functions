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

const updateAnimal = (name, newName) => {
    animals = animals.map((animal) => animal === name ? newName : animal);
    return animals;
} 

console.log(updateAnimal('horse', 'ostrich'));