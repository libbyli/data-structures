var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 1;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    var leastRecent = Math.min(...Object.keys(storage));
    var dequeuedItem = storage[leastRecent];
    delete storage[leastRecent];
    return dequeuedItem;
  };

  someInstance.size = function() {
    storage.size = Object.keys(storage).length;
    return storage.size;
  };

  return someInstance;
};
