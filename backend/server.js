const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT;
const db_uri = process.env.MONGO_URL;

mongoose.connect(db_uri).then(() => {
    console.log("Database Connection Success..//")
}).catch((err) => {
    console.error(err);
});

const users = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const Users = mongoose.model("users",users);

app.post("/register",async (req,res) => {
    const user_data = req.body;
    const user = new Users({
        name: user_data.name,
        email: user_data.email,
        password: user_data.password
    })

    await Users.create(user).then((doc) => {
        console.log("User created..//");
        return res.status(200).send(doc);
    }).catch((err) => {
        return res.status(400).send(err);
        console.error(err);
    })
})

app.post('/login',async (req,res) => {
    const login_data = req.body;
    console.log("Request Data: ",login_data);
    await Users.findOne({email:login_data.Email, password: login_data.Password}).then((doc) => {
        console.log("User found..//",doc);
        return res.status(200).send(doc);
    }).catch((err) => {
        return res.status(400).send(err);
        console.error(err);
    })
})

app.listen(PORT , () => {
    console.log('Server is running on PORT: ',PORT);
})
