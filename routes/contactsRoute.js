const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contactsController');

router.get('/', contactsController.getAllIDs);

router.get('/:id', contactsController.getSingleID);

router.post('/', contactsController.createNewContact);

router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController. deleteContact);

module.exports = router;