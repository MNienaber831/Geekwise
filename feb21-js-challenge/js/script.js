// var btn1 = document.getElementById('btn1');
// var div = document.getElementsByTagName('div');
// var classes = document.getElementsByClassName('sensai');
//
// var lis = document.querySelectorAll('li');
// var ul = document.querySelector('ul');
//
//
// console.log(lis);
//
// // div.addEventListener('mouseover', function(){
// //   alert('hovering the div');
// // });
// for(var h = 0; h < lis.length; h = h + 2){
//   lis[h].style.backgroundColor = 'blue';
// }
//
// for(var i = 0; i < div.length; i++){
//   div[i].addEventListener('mouseover', function(){
//     alert('hovering the div');
//   })
// }
// console.log(i);
//
// for(var j = 0; j < classes.length; j++){
//   classes[j].addEventListener('click', function(){
//     alert('you clicked on a class');
//   })
// }
// console.log(i);
//
// btn1.addEventListener('click', function(){
//   var userName = prompt('What is your name?');
//
//   if(userName.length < 5 || userName.trim() === ''){
//     alert('Please enter your name');
//   }else{
//     alert('Thank you ' + userName);
//   }
//   // TERNARY OPERATOR
//   //  userName.length >= 5 ? alert(userName) : ('too short');
//
//   // OR === || (pipe characters)
//   // AND === && (ampersand characters)
// })


var input = document.querySelector('input[type="text"]');
var inputBtn = document.querySelector('input[type="submit"]');

inputBtn.addEventListener('click', function(e){
  e.preventDefault();
  var userName = input.value;
  console.log(userName);
})
