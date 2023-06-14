require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors')
// Connection to MongoDB
const bodyParser = require('body-parser');
 // Assuming you have a Image model



app.use(bodyParser.json());
app.use(cors())

app.use('/uploads', express.static('uploads'));

const url = process.env.DB_CONNECTION;
async function connectToMongoDB() {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
    
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
}
connectToMongoDB();


//Router


app.get('/', (req, res) => {
  res.send('Home heeree');
});

const usersRoute = require('./routes/users');
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);
app.use('/users', usersRoute);




app.listen(3000);