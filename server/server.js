const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

dotenv.config(); // config the dotenv

// connect with the db
connectDB();

//  express app

const app = express();

//  enableing cors

app.use(cors());

app.use(express.json());

// define routes
app.use("/api/auth", authRoutes);

// server PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));
