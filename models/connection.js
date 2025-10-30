const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:wcX4fsPBpopHbY0A@cluster0.pbzcdev.mongodb.net/weatherapp-part4';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));