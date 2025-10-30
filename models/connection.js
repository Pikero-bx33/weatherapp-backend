const mongoose = require('mongoose');

<<<<<<< HEAD
const connectionString = 'mongodb+srv://admin:wcX4fsPBpopHbY0A@cluster0.pbzcdev.mongodb.net/weatherapp-part4';
=======
const connectionString = process.env.MONGODB_URI;
>>>>>>> 01c707c0100db4961bab444a76c63882faf7dd33

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));