

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < this._limit; i++) {
    this._storage.set(i, []);
  }
  this._size = 0;
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
  this._size++;
  this.checkSize();
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
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucketIndex = i;
    }
  }
  bucket.splice(bucketIndex, 1);
  this._storage.set(index, bucket);
  this._size--;
  this.checkSize();
};

HashTable.prototype.checkSize = function() {
  if (this._size > (this._limit * 0.75)) {
    this.resize(this._limit * 2);
  } else if (this._size < (this._limit * 0.25) && this._limit > 8) {
    this.resize(this._limit / 2);
  }
}

HashTable.prototype.resize = function(newLimit) {
  var storageArray = [];
  this._storage.each(function(bucket, index, storage) {
    for (var i = 0; i < bucket.length; i++) {
      storageArray.push(bucket[i]);
    }
  });
  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);

  for (var i = 0; i < this._limit; i++) {
    this._storage.set(i, []);
  }
  
  for (var j = 0; j < storageArray.length; j++) {
    var index = getIndexBelowMaxForKey(storageArray[j][0], this._limit);
    var bucket = this._storage.get(index);
    bucket.push(storageArray[j]);
    this._storage.set(index, bucket);
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
   All functions are O(n), linear.
 */


