require("dotenv").config();
const mongoose = require("mongoose");
const mongo_Category = require("../models/category");
const stored_category = require("../data/category");

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async ()=>{
        await mongo_Category.deleteMany(); // delter previous data if there is
        await mongo_Category.insertMany(stored_category);
        console.log("Category added to MongoDb");
        mongoose.connection.close();

    })
    .catch((err) => {
    console.error("❌ Seeding failed:", err);
    });