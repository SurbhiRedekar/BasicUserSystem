const express = require('express');//Express framework module that allows you to create a server and handle HTTP requests.
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const usersRoutes = require('./routes/users');

const app = express();

// Connect to MongoDB database
//mongoose.connect('mongodb://localhost:27017/basic-user-system-api'

mongoose.connect('mongodb://127.0.0.1:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Set up middleware
app.use(bodyParser.json());

// Set up routes
app.use('/api/users', usersRoutes);

// Start server
app.listen(3000, () => console.log('Server started on port 3000'));
