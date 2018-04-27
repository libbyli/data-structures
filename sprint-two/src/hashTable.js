

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < this._limit; i++) {
    this._storage.set(i, []);
  }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var found = false;
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      found = true;
    } 
  }
  if (found === false) {
    bucket.push([k, v]);
    this._storage.set(index, bucket);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var bucketIndex;
  for (var i = 0; i < bucket.length; i++){
    if (bucket[i][0] === k) {
      bucketIndex = i;
    }
  }
  bucket.splice(bucketIndex, 1);
  this._storage.set(index, bucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
   All functions are O(n), linear.
 */


