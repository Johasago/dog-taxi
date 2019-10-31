const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


mongoose.connect('mongodb+srv://admin:Koalassay33k!@joscluster-txez0.mongodb.net/dog-taxi?retryWrites=true&w=majority')
    .then(() => {
        console.log('Mongoose connected')
    })
    .catch(err => {
        console.log(err)
    })

    
