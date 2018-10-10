//
// OBJECT DESTRUCTURING
//

// const person = {
//     name: 'Robert',
//     age: 23,
//     location: {
//         city: 'Pattaya',
//         temp: 40
//     }
// };

// const { name = 'Anonymous', age } = person;

// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// };

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(`${publisherName}`);



//
// ARRAY DESTRUCTURING
//

const address = [];
const [, , state = 'New York'] = address;
console.log(`You are in ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];

const [Coffee, small, medium, large] = item;

console.log(`A medium ${Coffee} costs ${medium}`);