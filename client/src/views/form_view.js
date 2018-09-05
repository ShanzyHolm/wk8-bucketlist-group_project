const PubSub = require('../helpers/pub_sub');

const FormView = function(form){
 this.form = form;
};

FormView.prototype.bindEvents = function(){
 this.form.addEventListener('submit', (evt) => {
   // console.log(evt.target);
   this.handleSubmit(evt);
 })
};

FormView.prototype.handleSubmit = function(evt) {
 evt.preventDefault();
 const newItem = this.createItem(evt.target);
 // console.log(newItem);
 PubSub.publish('FormView:item-submitted', newItem);
};

FormView.prototype.createItem = function(form){
 const newItem = {
   name: form.name.value,
   details: form.details.value,
   completed: form.completed.checked
 }
 return newItem;
};

module.exports = FormView;
