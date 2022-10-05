// const routes = require('express').Router();
// const { index } = require('../controllers/index');

// routes.get('/', index);

// module.exports = routes;


const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/contacts', require('./contactsRoute'))

module.exports = router;