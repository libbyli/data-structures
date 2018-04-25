var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 1;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function() {
    var mostRecent = Object.keys(storage).length;
    var poppedItem = storage[mostRecent];
    delete storage[mostRecent];
    counter--;
    return poppedItem;
  };

  someInstance.size = function() {
    storage.size = Object.keys(storage).length;
    return storage.size;
  };

  return someInstance;
};
