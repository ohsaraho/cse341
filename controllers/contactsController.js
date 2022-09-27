const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllIDs = async (req, res) => {
  const result = await mongodb.getDb().db('cse341_projects').collection('contacts').find();
  result.toArray().then((documents) => {
    res.json(documents);
  });
};

const getSingleID = async (req, res) => {
  const documentId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('cse341_projects').collection('contacts').find({ _id: documentId });
  result.toArray().then((document) => {
    res.json(document[0])
  });
};

const createNewContact = async (req, res) => {
  // const contact = {
  //     firstName: "Patty",
  //     lastName: "Wall",
  //     email: "pattyw@gmail.com",
  //     favoriteColor: "Red",
  //     birthday: "1968-04-10T07:00:00.000+00:00"

  // };
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday

  };

  const response = await mongodb.getDb().db('cse341_projects').collection('contacts').insertOne(contact);

  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'An error occurred while trying to create the contact.');
  }
};

const updateContact = async (req, res) => {
  const documentId = new ObjectId(req.params.id);
  const updateContactDoc = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday

  };
  
  // Changes just the favoriteColor // Use updateOne because it keeps the data that is already there and updates the new fields but replaceOne replaces the whole document
  // The $set operator allows you to replace a field that you specified with that value
  // let updateContactDoc = {
  //   $set: { favoriteColor: "Green" }
  // };

  const response = await mongodb.getDb().db('cse341_projects').collection('contacts').replaceOne({ _id: documentId }, updateContactDoc);

  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'An error occurred while trying to update the contact.');
  }
};


const deleteContact = async (req, res) => {
  const documentId = new ObjectId(req.params.id);

  const response = await mongodb.getDb().db('cse341_projects').collection('contacts').deleteOne({ _id: documentId }, true);

  if (response.deletedCount > 0) {
    res.status(200).send();
  } else {
    res.status(500).json(response.error || 'An error occurred while trying to delete the contact.');
  }
};

module.exports = { getAllIDs, getSingleID, createNewContact, updateContact, deleteContact };