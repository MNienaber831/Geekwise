// function getReq(url, callback){
//   var req = new XMLHttpRequest();
//   req.open('GET', url);
//   req.onload = function(){
//     if(req.readyState === 4 && req.status === 200){
//       callback( JSON.parse(req.responseText) );
//     }else{
//       console.log('error', req.statusText);
//     }
//   };
//   req.send(null);
// }
//
// getReq("https://www.udacity.com/public-api/v0/courses", getCourses);
//
// function getCourses(){
//   var searchInput = document.querySelector('nav input[type="search"]'),
//       searchSubmit = document.querySelector('nav input[type="submit"]');
//
//   searchSubmit.addEventListener('click', function(evt){
//     evt.preventDefault();
//     getReq();
//   });
// }

(function(){
  getReq('https://www.udacity.com/public-api/v0/courses', init);
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

function init(data){
  console.log(data.degrees);
  var main = document.querySelector('main'),
      ul = document.createElement('ul'), li, expected_learning, homepage, image, required_knowledge;

  main.appendChild(ul);

  data.degrees.forEach(function(e, i){
    li = document.createElement('li'),
    expected_learning = document.createElement('p'),
    homepage = document.createElement('a'),
    image = document.createElement('img'),
    required_knowledge = document.createElement('p');

    if(e.expected_learning){
      expected_learning.innerHTML = e.expected_learning;
    }else{
      expected_learning.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, nihil debitis explicabo alias facere, sequi ab tempore esse eum commodi fugiat natus veniam corrupti dolorem quae incidunt dicta ullam quaerat. Dolores accusantium doloribus laboriosam temporibus obcaecati sequi officiis eum ut, atque beatae ducimus unde vero facere explicabo neque harum consectetur culpa! Commodi quibusdam facilis quia aliquam eos laboriosam illo fugiat voluptatum sequi dolores. Expedita cumque quibusdam id voluptatem numquam dignissimos, suscipit molestiae beatae placeat illum ipsum nisi, alias atque doloremque praesentium, quia eveniet! Ducimus repellendus vero numquam, neque quisquam mollitia est in, magnam dignissimos sed ad iusto voluptates eligendi quaerat.";
    }
    homepage.href = e.homepage;
    homepage.textContent = 'Learn More...';
    homepage.target = '_blank';
    if(e.image){
      image.src = e.image;
    }else{
      image.src = 'http://placehold.it/1000x600';
    }
    if(e.required_knowledge){
      required_knowledge.innerHTML = e.required_knowledge;
    }else{
      required_knowledge.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, nihil debitis explicabo alias facere, sequi ab tempore esse eum commodi fugiat natus veniam corrupti dolorem quae incidunt dicta ullam quaerat. Dolores accusantium doloribus laboriosam temporibus obcaecati sequi officiis eum ut, atque beatae ducimus unde vero facere explicabo neque harum consectetur culpa! Commodi quibusdam facilis quia aliquam eos laboriosam illo fugiat voluptatum sequi dolores. Expedita cumque quibusdam id voluptatem numquam dignissimos, suscipit molestiae beatae placeat illum ipsum nisi, alias atque doloremque praesentium, quia eveniet! Ducimus repellendus vero numquam, neque quisquam mollitia est in, magnam dignissimos sed ad iusto voluptates eligendi quaerat."
    }

    li.append(image, required_knowledge, expected_learning, homepage);
    ul.appendChild(li);
  });
}
