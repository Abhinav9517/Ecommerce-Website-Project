var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const path = require("path");
const app = express()

app.use(bodyParser.json())
// app.use(express.static('views/Nav-Section'))
app.use(express.static(path.join(__dirname, "views")));
app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect('mongodb://127.0.0.1:27017/EcommerceDatabase')
var db = mongoose.connection
db.on('error', () => console.log("Error in Connecting to Database"))
db.once('open', () => console.log("Connected to Database"))

// Sign_Up Database Setup

app.post("/sign_Up", (req, res) => {
    var name = req.body.name
    var address = req.body.address
    var mobile = req.body.mobile
    var email = req.body.email
    var password = req.body.password

    var data = {
        "name": name,
        "address": address,
        "mobile": mobile,
        "sign_Up-email": email,
        "sign_Up-password": password
    }
    db.collection('SignUp_users').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("SignUp Record Inserted Succesfully")
    })
    return res.redirect('index.html')
});

//Login Database Setup 

app.post("/login", (req, res) => {
    var email = req.body.email
    var password = req.body.password

    var data = {
        "login-email": email,
        "login-password": password
    }
    db.collection('login_users').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("Login Record Inserted Succesfully")
    })
    return res.redirect('index.html')
});


app.post("/return", (req, res) => {
    var first_name = req.body.text
    var last_name = req.body.text
    var email = req.body.email
    var password = req.body.password

    var data = {
        "first-name": text,
        "last-name": text,
        "login-email": email,
        "login-password": password
    }
    db.collection('return_users').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("Return Record Inserted Succesfully")
    })
    return res.redirect('return.html')
});

app.get("index.html", (req, res) => {
    res.set({
        "Allow-acces-Allow-Origin": '*'
    })
    return res.redirect('index.html')
}).listen(2024);

app.get("/Return Page/return.html", (req, res) => {
    res.set({
        "Allow-acces-Allow-Origin": '*'
    })
    return res.redirect('index.html')
});

console.log("Listening on port 2024");