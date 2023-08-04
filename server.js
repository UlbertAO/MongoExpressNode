const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config()
const connect_db = require('./config/dbConnection');

connect_db();
const app = express();

const port = process.env.PORT || 5000;

// use middleware to parse stream of data <body parser> from client side
app.use(express.json());

app.use("/api/contacts",require("./routes/contactRoutes")); // middleware /api/contacts is base for all

app.use(errorHandler); // middleware for error handler

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})