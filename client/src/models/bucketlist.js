const Request = require('../helpers/request');
const PubSub = require('../helpers/pub_sub');

const BucketList = function(url){
  this.url = url;
  this.request = new Request(this.url);
};


BucketList.prototype.bindEvents = function(){

  PubSub.subscribe('FormView:item-submitted', (evt) => {
    // console.log(evt.target);
    this.postItem(evt.detail);

  });

  PubSub.subscribe('ItemView:item-delete-clicked', (evt) => {
    this.deleteItem(evt.detail);
  });

};

BucketList.prototype.getData = function(){
  this.request.get()
    .then((items) => {
      PubSub.publish('BucketList:data-loaded', items);
    })
    .catch(console.error);
};

BucketList.prototype.postItem = function(item){
  this.request.post(item)
    .then((items) => {
      console.log(items);
      PubSub.publish('BucketList:data-loaded', items);
    })
    .catch(console.error);
};

BucketList.prototype.deleteItem = function(itemId){
  this.request.delete(itemId)
    .then((items) => {
      PubSub.publish('BucketList:data-loaded', items);
    })
    .catch(console.error);
};

BucketList.prototype.updateItem = function(itemId, itemDetails){
  this.request.update(itemId, itemDetails)
    .then((items) => {
      PubSub.publish('BucketList:data-loaded', items);
    })
    .catch(console.error);
}

module.exports = BucketList;
