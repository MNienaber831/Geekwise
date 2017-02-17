var btnOne = document.getElementById('Btn1'),
    moviesArray = [];

btnOne.addEventListener('click', getMovie);

function getMovie(){
  var userMovie = prompt('What is your favorite movie?');
  moviesArray.push(userMovie);

  if(moviesArray.length >= 3){
    console.log(moviesArray);
  }
  // if(moviesArray.length >= 5){
  //   for(var i = 0; i < moviesArray.length ; i++);
  //   console.log(moviesArray[i]);
  // }
  moviesArray.forEach(function(a, b){
    console.log(a + ' : ' + b);
  });
}
