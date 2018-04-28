class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 1;
  }

  push(value) {
    this.storage[this.counter] = value;
    this.counter++;
  }
  
  pop() {
    var mostRecent = Object.keys(this.storage).length;
    var poppedItem = this.storage[mostRecent];
    delete this.storage[mostRecent];
    this.counter--;
    return poppedItem;
  }
  
  size() {
    this.storage.size = Object.keys(this.storage).length;
    return this.storage.size;
  }
}

var someInstance = new Stack();