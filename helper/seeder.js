const Users = require('../models/Users');
const faker = require('faker')
const mongoose = require('mongoose')
require('dotenv').config();

// Create 20 new users and exit

createUsers = async () => {
    for (i = 0; i < 20; i++) {
        let user = new Users();
        user.name = faker.name.firstName();
        user.email = faker.internet.email();
        user.city = faker.address.city();
        user.country = faker.address.country();
        await user.save();
    }

    console.log('Successfully added 20 users')
}

// DB setup
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true }, async (err, db) => {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error: ', err)
        
    } else {
        console.log(`Connection established to the "${db.name}" mongoDB.`)
        await createUsers()
        process.exit()
    }
});


