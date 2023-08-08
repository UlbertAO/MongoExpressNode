const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv")
const connect_db = require('./config/dbConnection');

// Load environment variables from .env file
dotenv.config({path:".env"})
const port = process.env.PORT || 5000;

// create express server
const app = express();

// connect to MongoDB
connect_db();

// use middleware to parse stream of data <body parser> from client side
app.use(express.json());

app.use("/api/contacts",require("./routes/contactRoutes")); // middleware for /api/contacts is base for all
app.use("/api/users",require("./routes/userRoutes"));
app.use(errorHandler); // middleware for error handler

// start express server
app.listen(port,()=>{
    console.log(`App is running on http://localhost:${port}`);
    console.log('Press CTRL-C to stop.');
})