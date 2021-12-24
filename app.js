// Import modules
const express = require("express");
const router = require("./routers/controller") ;
const dotenv = require("dotenv");
dotenv.config();

// Initiate the app
const app = express();

// Add Middleware
app.use(express.json());

// Add routes
app.use(router);

// Start server
const port = 3000;
app.listen(port, () => {
    console.log("Server is running on port", port)
})