const express = require('express');
const app = express();
// const lesson1Controller = require('./controllers/lesson1')
const port = 5500;

app.use('/', require('./routes'))

app.listen(process.env.PORT || port, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || port));
});