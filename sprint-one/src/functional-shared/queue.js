var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.counter = 1;

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

queueMethods.dequeue = function() {
  var leastRecent = Math.min(...Object.keys(this.storage));
  var dequeuedItem = this.storage[leastRecent];
  delete this.storage[leastRecent];
  return dequeuedItem;
};

queueMethods.size = function() {
  this.storage.size = Object.keys(this.storage).length;
  return this.storage.size;
};