const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path');
require('dotenv').config();

// DB setup
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true }, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error: ', err);
    } else {
        console.log(`Connection established to the "${db.name}" mongoDB.`);
    }
});

mongoose.connection
    .once('open', () => console.log('DB, good to go!'))
    .on('error', error => {
        console.warn('Warning', error);
    });

// Routes
require('./routes/usersRoutes')(app);

app.get('/', function (req, res) {
    res.status(200).sendFile(path.join(__dirname+'/index.html'));
})

app.listen(process.env.PORT, () => console.log(`Interview_Users API listening on port ${process.env.PORT}!`))