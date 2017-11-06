const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();

// Load environment variables from .env file
dotenv.load();

// Connect to DB
const mongodbUri = process.env.MONGODB_SECRET;
mongoose.connect(mongodbUri);

// Controllers
const linkController = require('./controllers/link');

// Routes
app.get('/create/*', linkController.createShortLink);
app.get('/:short_link', linkController.shortLinkRedirect);

// listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
