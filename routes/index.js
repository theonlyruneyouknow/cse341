const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.blankRoute);
routes.get('/rune', lesson1Controller.runeRoute);


module.exports = routes;
// app.get('/test', (req, res) => {
//     res.send("Hello test");
// });
