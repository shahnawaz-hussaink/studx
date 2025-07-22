const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;
const deals = require('./data/deals');
const categoryData = require('./data/categoryData');
// Fake data

app.use(cors());

// Middleware (optional)
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Studx backend is running 🎯');
});

app.get('/api/deals', (req, res) => {
  res.json(deals);
});
app.get('/api/category',(req,res)=>{
  res.json(categoryData);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
