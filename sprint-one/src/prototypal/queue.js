var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.backNum = 0;
  someInstance.frontNum = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.backNum] = value;
  this.backNum++;
};
queueMethods.dequeue = function() {
  var temp = this.storage[this.frontNum];
  delete this.storage[this.frontNum];
  this.frontNum++;
  return temp;
};
queueMethods.size = function() {
  if (this.backNum - this.frontNum < 0) {
    return 0;
  }
  return this.backNum - this.frontNum;
};


