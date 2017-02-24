var form = document.querySelector('form#contactForm'),
    subBtn = document.querySelector('form#contactForm input[type="submit"]'),
    loginForm = document.querySelector('#contactForm'),
    loginBtn = document.querySelector('#loginForm input[type="submit"]'),
    custom = document.querySelector('.custom');

var userArr = [],
    contactArr = [],
    loginArr = [];

var username = '';

if(localStorage.getItem('username')){
  username = localStorage.getItem('username');
  custom.textContent + 'Hello ' +username+ '.'
}

// contactBtn.addEventListener('ckick', function(evt){
//
// })

// subBtn.addEventListener('click', function(evt){
//   evt.preventDefault();
//   for(var i = 0; i < form.elements.length - 1; i++){
//     if(form.elements[i].type !== 'checkbox'){
//        userArr.push(form.elements[i].value);
//     }
//     if(form.elements[i].type === 'checkbox' &&
//        form.elements[i].checked){
//          userArr.push(true);
//        }
//   }
//   console.log(userArr);
// });

// loginBtn.addEventListener('click', function(evt){
//   evt.preventDefault();
//
//   for(var i = 0; i < loginForm.elements.length - 1; i++){
//     if (loginForm.elements[i].type === 'text'){
//       localStorage.setItem('username', loginForm.elements[i].value)
//     }else{
//       sessionStorage.setItem('password')
//     }
//   }
// })
/*
.setItem('key', 'value');
.getItem('key');
.removeItem('key');
.clear();
*/
