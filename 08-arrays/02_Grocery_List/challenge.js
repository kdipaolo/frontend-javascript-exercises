module.exports.addItem = function(newItem, list){

var lastElementIndex = list.length - 1; 

list.push(newItem);
return list;

};
// Create an addItem function. This function should take two arguments:

// the first argument is the item you want to add to the end of the list
// the second argument is the array that the item will be added to.
// Don't add an item to the list if it already exists in the list

module.exports.reverseSortedList = function(array){
  var sort = array.sort();
  return sort.reverse();
};

// module.exports.addItem = function(newItem, list){

// var lastElementIndex = list.length - 1; 

// if(list[lastElementIndex] != newItem){
// list.push(newItem);
// return list;

// };