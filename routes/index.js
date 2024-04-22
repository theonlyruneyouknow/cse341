const routes = require('express').Router();
// Router is a built in function of node
const lesson1Controller = require('../controllers/lesson1');
// includes the lesson1.js file from the controller folder

routes.get('/', lesson1Controller.rootRoute);
routes.get('/blank', lesson1Controller.blankRoute);
routes.get('/rune', lesson1Controller.runeRoute);
// #2 This is the routes from #1 in the lesson1 file in the controller folder

// #2 exported to be able to be used by #1
module.exports = routes;
// app.get('/test', (req, res) => {
//     res.send("Hello test");
// });
