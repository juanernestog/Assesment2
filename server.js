require('dotenv').config(); // Load .env file
const express = require('express'); // Load Express
const app = express(); // Create Express app
mongooose = require('mongoose'); // Load Mongoose

mongooose.connect(process.env.DB_URL); // Connect to MongoDB
const db = mongooose.connection; // Get Mongoose connection
db.on('error', console.error.bind(console, 'connection error:')); // Log connection errors
db.once('open', () => console.log(`connected to mongoose`)); // Log successful connection

app.use(express.json()); // Use JSON

//TO DO: add routes
const userRouter = require('./routes/user');
app.use('/api/user', userRouter);
const favRouter = require('./routes/fav');
app.use('/api/fav', favRouter);
// const favListRouter = require('./routes/favList');
// app.use('/favList', favListRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
