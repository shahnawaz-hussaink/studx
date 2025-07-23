const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Import route files
const dealsRoute = require('./routes/deals');
const categoryRoute = require('./routes/categories');
const featuredProductsRoute = require('./routes/featuredProducts');

// Route registration
app.get('/', (req, res) => {
  res.send('Studx backend is running 🎯');
});

app.use('/api/deals', dealsRoute);
app.use('/api/category', categoryRoute);
app.use('/api/featured-products', featuredProductsRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
