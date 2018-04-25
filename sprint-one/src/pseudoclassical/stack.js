var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 1;
};

Stack.prototype.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

Stack.prototype.pop = function() {
  var mostRecent = Object.keys(this.storage).length;
  var poppedItem = this.storage[mostRecent];
  delete this.storage[mostRecent];
  this.counter--;
  return poppedItem;
};

Stack.prototype.size = function() {
  this.storage.size = Object.keys(this.storage).length;
  return this.storage.size;
};

var someInstance = new Stack();