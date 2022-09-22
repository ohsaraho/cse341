// const routes = require('express').Router();
// const { index } = require('../controllers/index');

// routes.get('/', index);

// module.exports = routes;

const routes = require('express').Router();

routes.use('/contacts', './contacts');

module.exports = routes;