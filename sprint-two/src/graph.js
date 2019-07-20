

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var keys = Object.keys(this.storage);
  return keys.includes(node.toString());
  
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let key in this.storage) {
    for (let i = 0; i < this.storage[key].length; i++) {
      if(this.storage[key][i] === node) {
        delete this.storage[key][i];
      }
    }
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode].includes(toNode);

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.storage[fromNode].includes(toNode) === false) {
    this.storage[fromNode].push(toNode);
  }
  if (this.storage[toNode].includes(fromNode) === false) {
    this.storage[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (let i = 0; i < this.storage[fromNode].length; i++) {
    if (this.storage[fromNode][i] === toNode) {
      delete this.storage[fromNode][i];
    }
  }
  for (let i = 0; i < this.storage[toNode].length; i++) {
    if (this.storage[toNode][i] === fromNode) {
      delete this.storage[toNode][i];
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let key in this.storage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


