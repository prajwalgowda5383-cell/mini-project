const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Contact = require("./models/contact");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/portfolioDB")
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch(err => console.log(err));

// Routes
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();

    res.json({ message: "Message saved to database!" });

  } catch (error) {
    res.status(500).json({ message: "Error saving message" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
