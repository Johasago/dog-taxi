const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const DogService = require('./services/dog-services')
require('./database')

const app = express();

app.set('view engine', 'pug')
app.use(bodyParser.json())

const upload = multer({dest: 'uploads/'});

app.listen(3001, () => {
    console.log('Server listening on port 3001');
});

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/index.html');
});

// Dog endpoints

app.get('/dogs/all', async (req, res) => {
    const dogs = await DogService.findAll()
    res.json( dogs )
  })
  
  
  
  app.get('/dogs/:id', async (req, res) => {
    const dog = await DogService.find(req.params.id)
    res.render('data', { data: dog })
  })
  
  app.post('/dogs', upload.single('imageFile'), async (req, res) => {
    console.log(req.file)
    const user = await DogService.add(req.body)
    res.send(user)
  })
  
  
  
  app.delete('/dogs/:id', async (req, res) => {
    const user = await DogService.del(req.params.id)
    res.send(user)
  })



