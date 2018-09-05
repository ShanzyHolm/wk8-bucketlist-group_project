const PubSub = require('../helpers/pub_sub.js');
// const

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
    console.log(item);
  })
};

module.exports = GridView;
