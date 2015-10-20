// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result;
  //check if the obj is null
 if (obj === null) {
    return "" + null + "";
  }else if (typeof obj === "string") {
    return '"' + obj + '"';
  }else if (typeof obj === "boolean" || typeof obj === "number"){
    return obj.toString();
  }
  //check if the object is an array
if (Array.isArray(obj)) {
 result = [];
	_.each(obj, function(val){
      result.push(stringifyJSON(val));
    });
    return '[' + result + ']';
}

if (typeof(obj) === "object"){
 result = [];
   _.each(obj, function(value, key){
      if (value === undefined || typeof(value) === "function") {
        return '{}';
      }
    result.push((stringifyJSON(key) + ":" + stringifyJSON(value)));
    });
    return '{' + result + '}';
  }
  return "" + obj + "";
};
