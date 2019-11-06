const express = require('express')
//const expressAsync = require ('express-async-errors');
const bodyParser = require('body-parser')
const multer = require('multer')
const axios = require('axios')
const Bcrypt = require('bcryptjs')
const path = require('path');
const cookieParser = require('cookie-parser')

require("dotenv").config()
//const pug = require('pug')
const DogService = require('./services/dog-service')
const OwnerService = require('./services/owner-service')

require('./database')

const app = express();

app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(cookieParser())


app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err)
  res.end();
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'client/public/images'))
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })

if (process.env.NODE_ENV === 'production') {
  app.use(express.static( 'client/build' ));


const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


// Dog endpoints

app.get('/api/dogs/all', async (req, res) => {
    const dogs = await DogService.findAll()
    res.json( dogs )
    res.status(500).send(error)
  })
  
  app.get('/api/dogs/:id', async (req, res) => {
    const dog = await DogService.find(req.params.id)
    res.render('data', { data: dog })
  })
  
  app.post('/api/dogs', upload.single('imageFile'), async (req, res) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file);
    
    const user = await DogService.add(req.body)
    res.send(user)
  })

  app.get('/api/dogs/name/:name', async (req, res) => {
    const dog = await DogService.findByName(req.params.name)
    res.render('data', { data: dog })
  })
  
  
  
  app.delete('/api/dogs/:id', async (req, res) => {
    const user = await DogService.del(req.params.id)
    res.send(user)
  })


// Owner endpoints

app.get('/api/owners/all', async (req, res) => {
  const owners = await OwnerService.findAll()
  res.json( owners )
})

app.get('api/owners/:id', async (req, res) => {
  const owner = await OwnerService.find(req.params.id)
  res.render('data', { data: owner })
})

app.post('/api/owners', upload.array(), async (req, res) => {
  req.body.password = Bcrypt.hashSync(req.body.password, 10)
  user = await OwnerService.add(req.body)
  res.send(user)
})

app.get('/api/owners/name/:name', async (req, res) => {
  const owner = await OwnerService.findByName(req.params.name)
  res.render('data', { data: owner })
})



app.delete('/api/owners/:id', async (req, res) => {
  const user = await Owner.del(req.params.id)
  res.send(user)
})

async function lookupAddress(postcode, number) {
  const apiKey = '3MorZsI8vkOk-qAPhXypdg21684'
  const addresses = axios.get('https://api.getAddress.io/find/' + postcode + '/' + number + '?api-key=' + apiKey)
  return addresses
}

let addresses;
app.all('/api/postcode', upload.array(), async (req, res) => {
  //const query = req.body.number + req.body.postcode;
  addresses = await lookupAddress(req.body.postcode, req.body.number);
  res.send(addresses.data.addresses)
})

app.post('/api/login', upload.array(), async (req, res) => {
  try { const user = await OwnerService.findByEmail(req.body.email)
  if(!user) {
    return res.status(400).send({ message: "The email does not exist"})
  }
  if(!Bcrypt.compareSync(req.body.password, user.password)) {
    return res.status(400).send({ message: "The password is invalid" })
  }
  res.send({ message: "The username and password combination is correct" })
  response.cookie('nameOfCookie', 'cookieValue', {
    maxAge: 60 * 60 * 1000, // 1 hour
    httpOnly: true,
    secure: true,
    sameSite: true,
  })
} catch(error) {
  res.status(500).send(error)
}
})

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
});
}

