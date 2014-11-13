module.exports.equalStrings = function(stringOne, stringTwo) {
return stringOne == stringTwo; 
};

module.exports.notEqual = function(one, two) {
return one !== two; 
};

module.exports.inBetween = function(lower, middle, upper) {
return (lower < middle) && (upper > middle);
};

module.exports.outsideRanges = function(number) {
return !(10 <= number && number <= 20) && !(42 < number && number <= 75) &&  !(6 < number && number < 1);
};

module.exports.nameAndPrice = function(name, price) {
return (name == 'NYTimes' || name == 'LATimes') && (price >= 1);
};