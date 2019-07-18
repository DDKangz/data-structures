var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var storageNumFirst = 0;
  var storageNumLast = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[storageNumLast] = value;
    storageNumLast++;
  };

  someInstance.dequeue = function() { // [a,b *removes a*, c, *---NOW REMOVE B--]
    //
    var temp = storage[storageNumFirst];
    delete storage[storageNumFirst];
    storageNumFirst++;
    return temp;
  };

  someInstance.size = function() {
    if (storageNumLast - storageNumFirst < 0) {
      return 0;
    }
    return storageNumLast - storageNumFirst;
  };

  return someInstance;
};
