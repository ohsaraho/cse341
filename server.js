const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connectDB');

const port =  process.env.PORT || 8080;
const app = express();

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/', require('./routes'));


mongodb.initDb((error, mongodb) => {
    if (error) {
        console.log(error);
    } else {
        app.listen(port);
        console.log(`Connected to DB successfully and listening on ${port}`);
    }
});
