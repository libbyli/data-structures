

// Instantiate a new graph
var Graph = function() {
  this.storage = [];
};

Graph.prototype.findNodeIndex = function(node) {
  var index;
  var counter = 0;
  while (index === undefined && counter < this.storage.length) {
    if (this.storage[counter].value === node) {
      index = counter;
    }
    counter++;
  }
  return index;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {};
  newNode.value = node;
  newNode.edges = [];
  this.storage.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === node) {
      return true;
    }
  }
  return false; 
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  this.storage.splice(this.findNodeIndex(node), 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // use findNodeIndex to find the nodes in storage
  // check the edges array of fromNode object to see if it contains toNode object 
  // (don't need to check vice versa because it's an undirected graph and the relationship is symmetrical)
  // return true if it does and false it if doesn't 
  var index = this.findNodeIndex(fromNode);
  var nodeEdges = this.storage[index].edges;
  for(var i = 0; i < nodeEdges.length; i++){
    if(nodeEdges[i] === toNode){
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // use findNodeIndex to find the nodes in storage
  // push toNode object into the edge array in fromNode object and vice versa
  var indexFromNode = this.findNodeIndex(fromNode);
  var indexToNode = this.findNodeIndex(toNode);
  this.storage[indexFromNode].edges.push(toNode);
  this.storage[indexToNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // use findNodeIndex to find the nodes in storage
  // splice the edge array of fromNode object to remove toNode object and vice versa
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


