var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.counter = 1;

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

stackMethods.pop = function() {
  var mostRecent = Object.keys(this.storage).length;
  var poppedItem = this.storage[mostRecent];
  delete this.storage[mostRecent];
  this.counter--;
  return poppedItem;
};

stackMethods.size = function() {
  this.storage.size = Object.keys(this.storage).length;
  return this.storage.size;
};
