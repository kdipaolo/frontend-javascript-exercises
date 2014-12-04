module.exports.createCourse = function(courseTitle,courseDuration,courseStudents){
  var object = {
    title: courseTitle,
    duration: courseDuration,
    students: courseStudents
  }
  return object;
};

module.exports.addProperty = function(object, newProp, newValue){

// If object doesn't already have a property named newProp, then add newProp with value of newValue to object
// If object already has newProp, return the object argument.

//IF

if(!object[newProp]){
  return object[newProp] = newValue;
} else {
  return object;
}


};

module.exports.formLetter = function(letter){
 return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;
};

module.exports.canIGet = function(item,money){
var obj = {
'MacBook Air' : 999,
'MacBook Pro' : 1299,
'Mac Pro' : 2499,
'Apple Sticker' : 1
}




return obj[item] <= money;


};




// MacBook Pro' - $1299
// 'Mac Pro' - $2499
// 'Apple Sticker' - $1 


// return true if a user can afford a given item according to the price chart below, and false otherwise:
// 'MacBook Air' - $999
// MacBook Pro' - $1299
// 'Mac Pro' - $2499
// 'Apple Sticker' - $1
// Return false if the item is not in the above list of Apple products
// Do this with 0 'if' conditions! (Hint: Place the above price table in an object).
