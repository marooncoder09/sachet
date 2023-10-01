const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Defining and using routes

const tempRoute = require('./routes/tempRoute');
const botRoute = require('./routes/botRoute.js');

app.use('/api/temp', tempRoute);
app.use('/api/bot', botRoute);


module.exports = app;