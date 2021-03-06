require('dotenv').config(); // Load .env file
const express = require('express'); // Load Express
const app = express(); // Create Express app
mongooose = require('mongoose'); // Load Mongoose

mongooose.connect(process.env.DB_URL); // Connect to MongoDB
const db = mongooose.connection; // Get Mongoose connection
db.on('error', console.error.bind(console, 'connection error:')); // Log connection errors
db.once('open', () => console.log(`connected to mongoose`)); // Log successful connection
db.on('SIGINT', () => {
  console.log('shutting down');
  process.exit();
});

app.use(express.json()); // Use JSON

//TO DO: add routes
const userRouter = require('./routes/user');
app.use('/api/fav', userRouter);
// const favRouter = require('./routes/fav');
// app.use('/api/fav', favRouter);
const auth = require('./routes/auth');
app.use('/auth/local/login', auth);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
