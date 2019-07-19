var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var objNum = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[objNum] = value;
    objNum++;
  };

  someInstance.pop = function() {
    var temp = storage[objNum - 1];
    delete storage[objNum - 1];
    objNum--;
    return temp;
  };

  someInstance.size = function() {
    if (objNum < 0) {
      return 0;
    }
    return objNum;
  };

  return someInstance;
};
