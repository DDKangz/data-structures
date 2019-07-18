var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.frontNum = 0;
  this.backNum = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.backNum] = value;
  this.backNum++;
};
Queue.prototype.dequeue = function() {
  var temp = this.storage[this.frontNum];
  delete this.storage[this.frontNum];
  this.frontNum++;
  return temp;
};
Queue.prototype.size = function() {
  if (this.backNum - this.frontNum < 0) {
    return 0;
  }
  return this.backNum - this.frontNum;
};


