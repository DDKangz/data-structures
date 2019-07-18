var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.num = 0;
  extend (someInstance, stackMethods)
  return someInstance;
};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value) {
    this.storage[this.num] = value;
    this.num++;
  };
stackMethods.pop = function() {
    var temp = this.storage[this.num - 1];
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

