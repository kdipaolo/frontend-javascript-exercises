module.exports.stream = function(conditionalFn,actionFn){
var actionFn = 0;
while (actionFn < 10) {
  conditionalFn = function() { return true; };
  actionFn++;
}
};

module.exports.sumNumbers = undefined;

