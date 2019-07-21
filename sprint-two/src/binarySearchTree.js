var BinarySearchTree = function(value) {
  this.value = value;

  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if (this.value > value) {
    if (this.left === null){
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }   
  }
  if (this.value < value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (this.left === null || this.right === null) {
    return false;
  } else if (this.value > value) {
    return this.left.contains(value);
  } else if (this.value < value) {
    return this.right.contains(value);
  } else {
    return false;
  }
};

BinarySearchTree.prototype.depthFirstLog = function(value) {
  value(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(value);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(value);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
