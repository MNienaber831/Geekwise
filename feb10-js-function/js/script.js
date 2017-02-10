// var str = "MiCaeLa";
// var modStr = str.substr(1, 4);
// var username = prompt('whats your name?').trim();
// console.log(username);

// console.log(str, modStr);

// .toLowerCase() - lowercase string
// .toUpperCase() - uppercase string
// .substr() - get characters from starting index to ending index
// .trim() - removes excess spaces before and after
// .length - get total number of characters
// .charAt() - get character at specified index

// function getName(){
//   var name = prompt('What is your name foo?').trim();
//   return name;
// }
//
// var capName = function(){
//   var copyName = getName();
//   console.log(copyName);
//   var capFirst = copyName.charAt(0).toUpperCase(),
//       lowerRest = copyName.substr(1, copyName.length).toLowerCase();
//   return capFirst + lowerRest;
// }();
//
// function callName(){
//   alert(capName);
// }
// callName();



var extBtn = document.getElementById('external');
var voidBtn = document.getElementById('void');
var content = document.getElementById('content');

extBtn.addEventListener('click', function(){
  var userName = prompt('what is your name?');
  content.textContent = userName;
});

voidBtn.addEventListener('click', function(){
  content.textContent = ' ';
})

function changeColor(){
  var rand = Math.floor(Math.random() * 360) + 1;
  document.body.style.backgroundColor = 'hsl('+ rand +', 50%, 50%)';
}
