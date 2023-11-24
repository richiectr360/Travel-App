const express = require('express');
const mongoose = require('mongoose');

const hotelRouter = require("./routes/hotel.router");
const hotelDataAddedToDBRouter = require("./routes/dataimport.router");

const connectDB = require("./config/dbconfig");

const app = express();

app.use(express.json());
connectDB();

const PORT = 3500;

app.get("/", (req, res) => {
    res.send("Hello Geeks")
})

app.use("/api/hoteldata", hotelDataAddedToDBRouter);
app.use("/api/hotels", hotelRouter);

mongoose.connection.once("open", () => {
    console.log("Connected to DB");
    app.listen(process.env.PORT || PORT, () => {
        console.log("Server is UP and Running")
    })
})


