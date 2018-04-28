class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 1;
  }

  enqueue(value) {
    this.storage[this.counter] = value;
    this.counter++;
  }
  
  dequeue() {
    var leastRecent = Math.min(...Object.keys(this.storage));
    var dequeuedItem = this.storage[leastRecent];
    delete this.storage[leastRecent];
    return dequeuedItem;
  }
  
  size() {
    this.storage.size = Object.keys(this.storage).length;
    return this.storage.size;
  }
}

var someInstance = new Queue();