var BinarySearchTree = function(value) {
  var newBST = {};
  newBST.value = value;
  newBST.left = null;
  newBST.right = null;

  _.extend(newBST, bstMethods);

  return newBST;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  var newNode = BinarySearchTree(value);
  if (value < this.value) {
    if (this.left === null) {
      this.left = newNode;
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = newNode;
    } else {
      this.right.insert(value);
    }
  }
};

bstMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  if (target < this.value) {
    if (this.left === null) {
      return false;
    } 
    return this.left.contains(target);
  } else {
    if (this.right === null) {
      return false;
    } 
    return this.right.contains(target);
  }
};

bstMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};

bstMethods.closestValue = function(target) {
  var difference = Math.abs(target - this.value);
  var result = this.value;
  if (target === this.value) {
    return this.value;
  }
  var compareNumbers = function(target, node) {
    var nodeDifference = Math.abs(target - node.value);
    if (nodeDifference < difference) {
      difference = nodeDifference;
      result = node.value;
    }
    if (target < node.value) {
      if (node.left !== null) {
        compareNumbers(target, node.left);
      } else {
        return result;
      }
    } else if (target > node.value) {
      if (node.right !== null) {
        compareNumbers(target, node.right);
      } else {
        return result;
      }
    }
  };
  if (target < this.value) {
    return compareNumbers(target, this.left);
  } else if (target > this.value) {
    return compareNumbers(target, this.right);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
   .insert and .contains are O(n), linear, because our BST is not rebalancing itself.
   .depthFirstLog is O(n) because it has to apply the cb on every value.
 */
