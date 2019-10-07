const Dog = require('./dog')
const Vehicle = require('./vehicle')
const Driver = require('./driver')
const Owner = require('./owner')
const Database = require('./database')

let dexter = new DogModel('Dexter', 'Chow Chow', new Date(2016, 10, 26), '35kg', 'stubborn')

var rover = new Dog('Rover', 'Golden Retriever', new Date(1999, 3, 10), '28kg', 'grumpy')

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

dexter.calculateAge()

Database.save(rover);
Database.save(dexter);
const file = Database.load();