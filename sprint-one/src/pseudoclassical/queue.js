var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 1;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

Queue.prototype.dequeue = function() {
  var leastRecent = Math.min(...Object.keys(this.storage));
  var dequeuedItem = this.storage[leastRecent];
  delete this.storage[leastRecent];
  return dequeuedItem;
};

Queue.prototype.size = function() {
  this.storage.size = Object.keys(this.storage).length;
  return this.storage.size;
};




