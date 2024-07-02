const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
// const bcrypt = require('bcrypt');

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
    password: String,
    login_method: String
})

const Users = mongoose.model("users",users);

app.get('/',(req,res) => {
    res.send("Welcome to my vercel backend server");
})

app.post("/register",async (req,res) => {
    const user_data = req.body;
    // const inputtedPassword = req.body.password;

    const user = new Users({
        name: user_data.name,
        email: user_data.email,
        password: user_data.password
    })

    await Users.create(user).then((doc) => {
        console.log("User created..//");
        return res.status(200).send(doc);
    }).catch((err) => {
        console.error(err);
        return res.status(400).send(err);
    })
});

app.post('/google-register',async (req,res) => {
    const google_data = req.body;
    const user = new Users({
        name: google_data.name,
        email: google_data.email
    });
    await Users.create(user).then((doc) => {
        return res.status(200).send("User Registration Success..//");
    })
})

app.post('/login',async (req,res) => {
    const login_data = req.body;
    console.log("Request Data: ",login_data);
    await Users.findOne({email:login_data.Email, password: login_data.Password}).then((doc) => {
        console.log("User found..//",doc);
        return res.status(200).send(doc);
    }).catch((err) => {
        console.error(err);
        return res.status(400).send(err);
    })
});

app.get('/google-login', async (req,res) => {
    const google_data = req.params;
    await Users.findOne({ email: google_data.email }).then((doc) => {
        return res.status(200).send("User Logged In..//");
    }).catch((err) => {
        console.error(err);
    })
});

app.get('/loggedInUser', async (req,res) => {
    const email = req.query.email;
    const user = await Users.findOne({ email: email });
    res.status(200).send(user);
})

app.listen(PORT , () => {
    console.log('Server is running on PORT: ',PORT);
})
