var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //take the value and use the node function to turn it into a node
    var newNode = Node(value);
    //.middle = [];
    //
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var store = list.head.value;
    list.head = list.head.next;
    return store;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


 //.head property, a linkedListNode instance
//  .tail property, a linkedListNode instance
//  .addToTail() method, takes a value and adds it to the end of the list
//  .removeHead() method, removes the first node from the list and returns its value
//  .contains() method, returns boolean reflecting whether or not the passed-in value is in the linked list
//  What is the time complexity of the above functions?
