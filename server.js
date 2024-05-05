const express = require('express');
const app = express();
// const lesson1Controller = require('./controllers/lesson1')
const port = 8000;

// app.use('/', require('./routes'))
// #1=>#2 This is the routes that are found in routes/index.js

app.listen(process.env.PORT || port, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || port));
});