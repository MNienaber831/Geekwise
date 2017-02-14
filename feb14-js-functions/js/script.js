// var getName = function (){
//   return prompt('What is your name?').trim();
// }();
// console.log(getName);
//
// function callName(){
//   var modName = getName.charAt(0).toUpperCase() + getName.substr(1).toLowerCase();
//   console.log(modName);
//   return modName;
// }
//
// function fixedName(){
//   alert(callName());
// }
// fixedName();

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var div = document.getElementById('name');


btn1.addEventListener('click', function(){
  userFirstName = prompt('What is your first name?');
  console.log( parseInt(userFirstName) );
  if( isNaN(userFirstName) ){
      console.log('its not a number');
      btn2.disabled = false;
      btn1.disabled = true;
  }else{
      alert('Please type your name');
  }
  // No var makes it global
});
btn2.addEventListener('click', function(){
  // console.log('username');
  // userLastName is scoped to this function
  var userLastName = prompt('What is your last name?');
  console.log( parseInt(userLastName) );
  if( isNaN(userLastName) ){
    console.log('its not a number');
    btn1.disabled = false;
    btn2.disabled = true;
    div.textContent = userFirstName + ' ' + userLastName;
  }else{
    alert('Please type your name');
  }
})
