const FormView = require('./views/form_view.js');
const GridView = require('./views/grid_view.js');
// const ItemView = require('./views/item_view.js');
const BucketList = require('./models/bucketlist.js');

document.addEventListener('DOMContentLoaded', () => {
  const APIURL = "http://localhost:3000/api/bucketlist";

  const bucketList = new BucketList(APIURL);
  bucketList.bindEvents()

  const itemForm = document.querySelector('#bucketlist-form');
  // console.log(itemForm);
  const itemFormView = new FormView(itemForm);
  itemFormView.bindEvents();

  const itemsElement = document.querySelector('#items');
  const gridView = new GridView(itemsElement);
  gridView.bindEvents();
});
