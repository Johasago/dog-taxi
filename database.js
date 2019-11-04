const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const secret = process.env.SECRET
mongoose.connect('mongodb+srv://admin:' + secret + '@joscluster-txez0.mongodb.net/dogtaxi?retryWrites=true&w=majority')
    .then(() => {
        console.log('Mongoose connected')
    })
    .catch(err => {
        console.log(err)
    })

    
