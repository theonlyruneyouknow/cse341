const express = require('express');
const app = express();
const port = 5500;

app.get('/', (req, res) => {
    res.send("Blank All Hello");
});

app.get('/rune', (req, res) => {
    res.send("Hello Rune");
});

app.listen(process.env.PORT || port, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || port));
});