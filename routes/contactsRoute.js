const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contactsController');

router.get('/', contactsController.getAllIDs);

router.get('/:id', contactsController.getSingleID);

module.exports = router;

// const express = require('express');
// const router = express.Router();

// const contactsController = require('../controllers/contacts');

// router.get('/', contactsController.getAllIDs);

// router.get('/:id', contactsController.getSingleID);

// module.exports = router;