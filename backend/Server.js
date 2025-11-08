require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());


//Routes
app.get('/', (req, res) => {
  res.send('backend responding');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port: ${PORT}`);
});


app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});


app.use('/api/auth', authRoutes);


