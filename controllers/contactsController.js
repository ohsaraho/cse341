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

module.exports = { getAllIDs, getSingleID };