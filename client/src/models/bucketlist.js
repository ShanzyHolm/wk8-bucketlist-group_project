const Request = require('../helpers/request');
const PubSub = require('../helpers/pub_sub');

const BucketList = function(url){
  this.url = url;
  this.request = new Request(this.url);
};
