// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  //create an empty array
  var list = [];
  //creat an anonymous function to check the list
  function checkList(element){
  //check classes and push value to list
  if(element.classList && element.classList.contains(className)){
  list.push(element);
  }
  //iterate through childnode
  _.each(element.childNodes, function(value){
  //return recursed value
  return checkList(value);
  });
 }
 //get all the element in the body
  checkList(document.body);

  return list;
};

