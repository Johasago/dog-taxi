const Dog = require('./dog')
const Vehicle = require('./vehicle')
const Driver = require('./driver')
const Owner = require('./owner')

let dexter = new Dog('Dexter', 'Chow Chow', 2, '35kg', 'stubborn')

var rover = new Dog('Rover', 'Golden Retriever', 12, '28kg', 'grumpy')

var van = new Vehicle('van', 'medium', 'Ford', 'Transit')

var john = new Driver('John Smith')

var jo = new Owner('Jo Taylor', 'Welling')

jo.addDog(dexter)

john.pickUpPassenger(dexter)
john.pickUpPassenger(rover)
john.drive(van)

console.log(dexter)
console.log(john)
console.log(van)
console.log(jo)

john.passengers.forEach(function(elem) {
    console.log(elem.name, 'has been on a trip with', john.name );
});