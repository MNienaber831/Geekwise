var content = document.getElementById('content');

var h1 = document.createElement('h1');
content.appendChild(h1).textContent = 'hello world';

var p = document.createElement('p');
content.appendChild(p).textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.';

var a = document.createElement('a');
content.appendChild(a).textContent = 'Click Here';
a.href = 'http://google.com';
a.className =  'test2';
a.target = '_blank';

var ul = document.createElement('ul');
content.insertBefore(ul, a);


var br = document.createElement('br');
content.appendChild(br);

var br2 = document.createElement('br');
content.appendChild(br2);

var firstName = document.createElement('input');
content.appendChild(firstName);
firstName.type = 'text';
firstName.placeholder = 'First Name';

var lastName = document.createElement('input');
content.appendChild(lastName);
lastName.type = 'text';
lastName.placeholder = 'Last Name';

var email = document.createElement('input');
content.appendChild(email);
email.type = 'email';
email.placeholder = 'Email';

var password = document.createElement('input');
content.appendChild(password);
password.type = 'password';
password.placeholder = 'Password';

var number = document.createElement('input');
content.appendChild(number);
number.type = 'number';
number.placeholder = 'Number';

var form = document.createElement('form');
content.appendChild(form);
form.appendChild(firstName);
form.appendChild(lastName);
form.appendChild(br);
form.appendChild(email);
form.appendChild(password);
form.appendChild(number);

var submit = document.createElement('input');
submit.type = 'submit';
submit.value = 'Submit';
form.appendChild(submit);
content.insertBefore(form, a);

var arr = [];

submit.addEventListener('click', function(evt){
  evt.preventDefault();
  getValues();
});

number.addEventListener('change', function(evt){
  if(evt.target.value < 0){
    evt.target.value = 0
  }else{
    console.log(evt.target.value);
  }
});

function getValues(){
  // for (var i = 0; i < form.elements.length - 1; i++) {
  //   arr.push(form.elements[i].value);
  //   form.elements[i].value = '';
  // }
  loopNum = parseInt(number.value);
  for (var i = 0; i < loopNum; i++) {
    li = document.createElement('li');
    ul.appendChild(li).textContent = i + 1;
  }
  arr = [];
};
