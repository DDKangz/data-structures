var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this[item] = null;
};

setPrototype.contains = function(item) {
  if(this[item] !== undefined) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  delete this[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 