const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

// create express app
const app = express();

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json([{
            "id":1,
            "name" : "Rahul Narvekar",
            "major": "CS and Econ",
            "resume" : "https://drive.google.com/file/d/1hezwS7qfRwCvbGV8wNhLqvqXQxQp7-dH/view?usp=sharing",
            "status": "pending"
        },{
            "id":2,
            "name" : "Charles Chow",
            "major": "CS and Business",
            "resume" : "https://drive.google.com/file/d/1hezwS7qfRwCvbGV8wNhLqvqXQxQp7-dH/view?usp=sharing",
            "status": "pending"
        },{
            "id":3,
            "name" : "Saurav Bahali",
            "major": "CS and Econ",
            "resume" : "https://drive.google.com/file/d/1hezwS7qfRwCvbGV8wNhLqvqXQxQp7-dH/view?usp=sharing",
            "status": "approved",
            "tags": "Swfit, NodeJS, Express, Java, OOP"
        },{
            "id":4,
            "name" : "Habib Khadri",
            "major": "CS and Business",
            "resume" : "https://drive.google.com/file/d/1hezwS7qfRwCvbGV8wNhLqvqXQxQp7-dH/view?usp=sharing",
            "status": "approved",
            "tags": "Trello, Product Management, Java, OOP"
        }]);
});

require('./app/routes/resume.routes.js')(app);

app.enable('trust proxy');

// listen for requests
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});