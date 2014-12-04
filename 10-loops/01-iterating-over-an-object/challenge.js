module.exports.getKeys = function(array){
  
  return Object.keys(array);

};

module.exports.getValues = function (obj) { //return an array containing the values of the properties of the object
  // {foo: 'bar', bar: 'foo'} => ['bar','foo']
  var arr = [];
  for(i in obj){
    if(obj.hasOwnProperty(i)){
      arr.push(obj[i]);
    }
  }
  return arr;
};

module.exports.objectToArray = undefined;