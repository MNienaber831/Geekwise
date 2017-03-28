(function(){
  getReq("https://www.udacity.com/public-api/v0/courses", getTracks);
}());

function getReq(url, cb){
  var req = new XMLHttpRequest();
  req.open('GET', url);
  req.onload = function(){
    if(req.readyState === 4 && req.status === 200){
      cb( JSON.parse(req.responseText) );
    }else{
      console.log('error', req.statusText);
    }
  };
  req.send(null);
}



function getTracks(data){
  console.log(data.tracks);
  main = document.querySelector('main');

  data.tracks.forEach(function(obj, idx){
    div = document.createElement('div'),
    ol = document.createElement('ol'),
    h1 = document.createElement('h1');

    h1.textContent = obj.name;
    div.appendChild(h1);
    main.appendChild(div);
    console.log(obj.courses);
    obj.courses.forEach(function(e, i){
      p = document.createElement('p'),
      li = document.createElement('li');

      p.textContent = e;
      li.appendChild(p);
      ol.appendChild(li);
      div.appendChild(ol);
    });
  });
}
