module.exports.sumNumbers = function(array){

 var total=0;
for(var i in array) {
total += array[i];
}
return total;

};

module.exports.splitAndLowerCaseString = function(x){
  return x.toLowerCase().split(",");
};

module.exports.addIndex = function(array){
for(var i = 0; i < array.length; i++)
{
  var id = array.indexOf(i);
  var idString = String(id);
  var valueString = String(i)
  return idString + valueString;
}
};
