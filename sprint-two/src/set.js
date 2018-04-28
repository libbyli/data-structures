var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage[item] = item;
};

setPrototype.contains = function(item) {
  if (this.storage[item] !== undefined) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) {
  delete this.storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
   They are all constant.
 */
