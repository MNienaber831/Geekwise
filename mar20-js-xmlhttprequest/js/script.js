/*
var car = {
  make: 'GMC',
  model: 'Envoy',
  color: 'white',
  year: 2002,
  doors: 4
}

for(key in car){
  // console.log(key)
  // console.log(car[key]);
  console.log(key + ': ' + car[key]);
}
*/

const ROOT_URL = 'https://api.github.com/'
const CLIENT_ID = '79e8530cc29b38af4629';
const CLIENT_SECRET = '1f72a83171a9bcb34529afe3cd6e36302e44bc54';

var main = document.querySelector('main'),
img, h1, req, githubObj;
function getReq(){

  req = new XMLHttpRequest();

  req.open('GET', ROOT_URL+'users/mikasa831?client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET);

  req.onprogress = function(){

  }

  req.onload = function(){

    if(req.readyState === 4 && req.status === 200){
      console.log('success', req.statusText);
      githubObj = JSON.parse(req.responseText);
    }else{
      console.log('error', req.statusText);
    }
    // img = document.createElement('img');
    // h1 = document.createElement('h1');
    // var githubObj = JSON.parse(req.responseText);
    // console.log(githubObj.avatar_url);
    // console.log(githubObj.login);
    // img.src = githubObj.avatar_url;
    // h1.textContent = githubObj.login;
    // main.appendChild(img);
    // main.appendChild(h1);

  };
  req.send(null);
}

(function(){
  getReq();
  console.log(githubObj);
}())
