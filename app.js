require('dotenv').config()
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require('cookie-parser');

const app = express();

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// connect db
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("INFO - MongoDB connected successfully."))
    .catch((err) => console.log(`ERROR - MongoDB not connected : ${err} `));

// register api routes
const apiRoutes = require("./routes");
const path = require("path");
app.use("/api", apiRoutes)

// register SPA routes
app.use(express.static(path.join(__dirname + "/public")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

// run server
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});