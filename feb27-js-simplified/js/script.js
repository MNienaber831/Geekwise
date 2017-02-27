var login = document.getElementById('login');
var loginForm =
'<form>'+
  '<h1>Please Login</h1>'+
  '<label>'+
    '<span>username</span>'+
    '<input type="text" placeholder="username">'+
  '</label>'+
  '<label>'+
    '<span>password</span>'+
    '<input type="password" placeholder="password">'+
  '</label>'+
  '<label>'+
    '<span id="charAlert"></span>'+
    '<input type="submit" value="go">'+
  '</label>'+
'</form>';
var charAlert = document.getElementById('charAlert');
login.innerHTML = loginForm;

document.querySelector('input[type="submit"]').addEventListener('click', function(e){
  e.preventDefault();
  getFormVals();
});

var form = document.querySelector('#login form');

function getFormVals(){
  var formInputs = [];
  console.log(form.elements);
  for(var i = 0; i < form.length - 1; i++){
      formInputs.push(form.elements[i].value);
  }
  console.log( charCheck(formInputs) );
  console.log( dropCapInputs(formInputs) );
}

function charCheck(char){

  if(char.length < 5){
    return char;
  }else{
    charAlert.textcontent('Your username and password have to be atleast 5 characters long.');
  }

}

function dropCapInputs(arr){

  if(Array.isArray(arr)){
    arr.forEach(function(e, i){
      arr[i] = arr[i].toLowerCase();
    });
    console.log(arr);
    return arr;
  }
}
