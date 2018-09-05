const PubSub = require('../helpers/pub_sub.js');
const ItemView = require('./item_view.js');

const GridView = function(element) {
  this.element = element;
};

GridView.prototype.bindEvents = function() {
  PubSub.subscribe('BucketList:data-loaded', (items) => {
    this.render(items);
  });
};

GridView.prototype.render = function(items) {
  // console.log(items);
  items.detail.forEach((item) => {
    const itemView = new ItemView(this.element, item);
    itemView.render();
  });
};

module.exports = GridView;
