const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv').config();

const app = express();

app.get("/", (req, res) => {
    res.send("FUCK");
});

app.listen(process.env.PORT, () => {

});