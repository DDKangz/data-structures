var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.num = 0;
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.num] = value;
  this.num++;
};
stackMethods.pop = function() {
  var temp = this.storage[this.num -1];
  delete this.storage[this.num - 1];
  this.num--;
  return temp;
};
stackMethods.size = function() {
  if (this.num < 0) {
    return 0;
  }
  return this.num;
};