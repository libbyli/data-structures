var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

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
      for(var i = 0; i < node.children.length; i++){
        if(checkNode(node.children[i])){
          return true;
        }
      }
      return false;
    }
  };
  return checkNode(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
   treeMethods.addChild is O(1), constant.
   treeMethods.contains is O(n), linear.
 */
