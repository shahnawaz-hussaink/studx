import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import dealsRoute from './routes/deals.js';
import categoryRoute from './routes/categories.js';
import featuredProductsRoute from './routes/featuredProduct.js';
import authRoutes from './routes/auth.js'; 
dotenv.config();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send(`Studx backend is running on port ${PORT}`);
});

app.use('/api/deals', dealsRoute);
app.use('/api/category', categoryRoute);
app.use('/api/featured-products', featuredProductsRoute);
app.use("/api/auth", authRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, )
.then(() => console.log(" MongoDB connected"))
.catch(err => console.error("MongoDB connection failed:", err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
