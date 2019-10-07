const express = require('express');
const DriverService = require('./services/driver-service');
const DogService = require('./services/dog-service');
const OwnerService = require('./services/owner-service');
const bodyParser = require('body-parser')
require('./database')

const app = express()
app.use(bodyParser.json())


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/dogs', async (req, res) => {
    const dogs = await DogService.findAll();
    res.render('dog', {dogs});
})

app.get('/dogs/:id', async (req, res) => {
    const dog = await DogService.find(req.params.id)
    res.render('data', { data: dog })
  })

app.get('/dogs/name/:name', async (req, res) => {
    const dogs = await DogService.findByName(req.params.name)
    console.log(dogs)
    res.render('data', { data: dogs })
  })

app.get('/dogs/age/:id', async (req, res) => {
    const dog = await DogService.find(req.params.id)
    console.log(dog)
    const dob = dog.dob;
    const borkday = dog.calculateAge(dob)
    res.send({borkday})
})

app.post('/dogs', async (req, res) => {
    const dog = await DogService.add(req.body);
    res.send(dog)
})

app.delete('/dogs/:id', async (req, res) => {
    const user = await DogService.del(req.params.id)
    res.send(user)
  })

app.get('/owners', async (req, res) => {
    const owners = await OwnerService.findAll();
    res.render('owner', {owners});
})

app.post('/owner', async (req, res) => {
    const owner = await OwnerService.add(req.body);
    console.log(req.body)
    res.send(owner)
})

app.delete('/owners/:id', async (req, res) => {
    const user = await OwnerService.del(req.params.id)
    res.send(user)
  })

app.post('/dogs/:id/addDriver', async (req, res) => {
    const dog = await DogService.addDriver(req.params.id, req.body.driverId)
    res.send(dog)
  })