const mongoose = require('mongoose');

mongoose.Promise = global.Promise
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


mongoose.connect('mongodb://localhost/dog-taxi')
    .then(() => {
        console.log('Mongoose connected')
    })
    .catch(err => {
        console.log(err)
    })

    
