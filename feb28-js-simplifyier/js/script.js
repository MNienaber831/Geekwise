// document.querySelector('button').addEventListener('click', function(){
//   // console.log( add(9, 7, 4) );
//   // console.log( addEx(2, 8) );
//
// });
//
// // function add(num1, num2, num3){
// //   return (num1 + num2) / num3;
// // }
//
// var addEx = function(){
//   // console.log(arguments);
//   var total = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     if(typeof arguments[i] !== 'string'){
//       total = arguments[i] + total;
//     }
//   }
//   return total;
// };


console.log( firstName() + ' ' + lastName() );

function firstName(){
  return 'Micaela';
}

function lastName(){
  return 'Nienaber';
}


document.querySelector('input[type="submit"]').addEventListener('click', function(gi){
    gi.preventDefault();
    getInfo();
    for (var i = 0; i < form.elements.length; i++) {
      form.elements[i]
    }
});

var form = document.querySelector('form');

function getInfo(){
  console.log(
    'Welcome ' + getName(form) + 'to your site. Your email is ' + getEmail(form) + '. You signed up for the following subscription ' + getChecks(form)
  );
}

function getName(arr){
  var names = '';
  for (var i = 0; i < arr.elements.length; i++) {
    if(arr.elements[i].type === 'text'){
      names += arr.elements[i].value + ' ';
    }
  }
  return names;
}

function getEmail(arr){
  var emails = '';
  for (var i = 0; i < arr.elements.length; i++) {
    if(arr.elements[i].type === 'email'){
      emails += arr.elements[i].value + ' ';
    }
  }
  return emails;
}

function getChecks(arr){
  var checks = '';
  for (var i = 0; i < arr.elements.length; i++) {
    if(arr.elements[i].type === 'checkbox' && arr.elements[i].checked)
    checks += arr.elements[i].value + ' ';
  }
  return checks;
}
