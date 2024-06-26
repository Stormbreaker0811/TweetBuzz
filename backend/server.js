const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
dotenv.config();

const PORT = process.env.PORT;
const db_uri = process.env.MONGO_URL;

mongoose.connect(db_uri).then(() => {
    console.log("Database Connection Success..//")
}).catch((err) => {
    console.error(err);
});

app.post("/register",(req,res) => {
    const user_data = req.body;
})

app.listen(PORT , () => {
    console.log('Server is running on PORT: ',PORT);
})
