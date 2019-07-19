var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.num = 0;
};

Stack.prototype.push = function (value) {
  this.storage[this.num] = value;
  this.num++;
};
Stack.prototype.pop = function() {
  var temp = this.storage[this.num -1];
  delete this.storage[this.num - 1];
  this.num--;
  return temp;
};
Stack.prototype.size = function() {
  if (this.num < 0) {
    return 0;
  }
  return this.num;
};


