const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('.helpers/create_router.js');

const pubblicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.use(parser.json());

MongoClient.connect('mongodb://localhost27017')
  .then((client) => {
    const db = client.db('bucketlist');
    const itemsCollection = db.collection('items');
    const itemsRouter = createRouter(itemsCollection);
    app.use('api/bucketlist', itemsRouter);
  })
  .catch(console.err);

app.listen(3000, function () {
  console.log(`Welcome traveller!  Listening on port ${this.address().port}`);
});
