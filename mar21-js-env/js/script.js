(function(){
  getReq('/env.json', init);
}());

function getReq(url, callback){
  var req = new XMLHttpRequest();
  req.open('GET', url);
  req.onload = function(){
      if(req.readyState === 4 && req.status === 200){
        callback( JSON.parse(req.responseText) );
      }else{
        console.log('error', req.statusText);
      }
  };
  req.send(null);
}

function init(data){
  // console.log( JSON.parse(data) );
  const CLIENT_ID = data.github.CLIENT_ID;
  const CLIENT_SECRET = data.github.CLIENT_SECRET;
  const ROOT_URL = 'https://api.github.com/';

  getReq(ROOT_URL+'users/mikasa831?client_id='+CLIENT_ID+'client_secret='+CLIENT_SECRET, gitObj);

  var btn = document.querySelector('button');
  btn.addEventListener('click', function(evt){
    // console.log(evt);
    // console.log(this.getAttribute('data-emoji'), printEmojis);
    getReq(ROOT_URL+this.getAttribute('data-emoji'), printEmojis);
  });
}

function printEmojis(data){
  console.log(data);
  var ul = document.querySelector('ul'),
  li, img;
  for(emoji in data){
    li = document.createElement('li'),
    img = document.createElement('img');

    img.src = data[emoji];
    li.append(img);
    ul.append(li);
  }
}

function gitObj(data){
  var main = document.querySelector('main'),
      img = document.createElement('img'),
      h1 = document.createElement('h1');

  img.src = data.avatar_url;
  h1.textContent = data.name;
  main.append(h1, img);
}
