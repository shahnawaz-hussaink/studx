const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000

// to use .env file for mongodb
dotenv.config();


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


// mogoose connection for fetching deals data
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection failed:", err));




app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
