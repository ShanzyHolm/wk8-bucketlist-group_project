const PubSub = require('../helpers/pub_sub.js');


const ItemView = function(element, item) {
  this.element = element;
  this.item = item;
}

ItemView.prototype.render = function() {
  const itemDiv = document.createElement('div');
  const itemName = document.createElement('h3');
  itemName.innerHTML = this.item.name;
  const itemDetail = document.createElement('p');
  itemDetail.innerHTML = this.item.details;
  const itemComplete = document.createElement('input');
    itemComplete.setAttribute('type', 'checkbox');
    itemComplete.checked = this.item.completed;
  itemDiv.appendChild(itemName);
  itemDiv.appendChild(itemDetail);
  itemDiv.appendChild(itemComplete);
  this.element.appendChild(itemDiv);
};


module.exports = ItemView;
