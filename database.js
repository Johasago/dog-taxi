const mongoose = require('mongoose')

mongoose.Promise = global.Promise
 
mongoose.connect('mongodb://localhost/dog-taxi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, function (err) {
 
    if (err) throw err;
  
    console.log('Successfully connected');
  
 });