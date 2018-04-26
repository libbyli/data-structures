var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];// fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  this.children.push(newNode);
};

treeMethods.contains = function(target) {
  var checkNode = function(node) {
    if (node.value === target) {
      return true;
    } else {
      if (node.children.length === 0) {
        return false;
      }
      // node.children.forEach(function)
    }
  };
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
