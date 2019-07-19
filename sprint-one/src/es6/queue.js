class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.frontNum = 0;
    this.backNum = 0;
  };

  enqueue(value) {
    this.storage[this.backNum] = value;
    this.backNum++;
  };

  dequeue() {
    var temp = this.storage[this.frontNum];
    delete this.storage[this.frontNum];
    this.frontNum++;
    return temp;
  };

  size() {
    if (this.backNum - this.frontNum < 0) {
      return 0;
    }
    return this.backNum - this.frontNum;
  }
};
