// config/mongoose.js
const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/testingdb"; // Change if needed

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.once("open", () => {
  console.log("Connected to MongoDB successfully");
});

module.exports = db;