(function(){
  var distance = document.querySelector('#meter li:nth-child(1) span')
      winW = document.querySelector('#meter li:nth-child(2) span'),
      winH = document.querySelector('#meter li:nth-child(3) span'),
      heroH = document.querySelector('#meter li:nth-child(4) span'),
      hero = document.querySelector('header'),
      sec1 = document.querySelector('section:nth-of-type(1)'),
      sec2 = document.querySelector('section:nth-of-type(2)'),
      sec3 = document.querySelector('section:nth-of-type(3)');


      var dist = 0,
          winWidth = window.innerWidth,
          winHeight = window.innerHeight,
          heroHeight = hero.clientHeight,
          sec1Height = 0;

  distance.textContent = dist;
  winW.textContent = window.innerWidth;
  winH.textContent = window.innerHeight;
  heroH.textContent = hero.clientHeight;

  // width = innerWidth
  // height = innerHeight


  if(window.innerHeight > sec1.offsetTop){
    // sec1.style.backgroundColor = 'blue';
    sec1.classList.add('visible');
  }

  window.addEventListener('resize', function(){
    winWidth = window.innerWidth,
    winHeight = window.innerHeight,
    heroHeight = hero.clientHeight,

    winW.textContent = window.innerWidth;
    winH.textContent = window.innerHeight;
    heroH.textContent = hero.clientHeight;
  });

  window.addEventListener('scroll', function(){
   dist = window.scrollY;
   distance.textContent = dist;

  if( (sec1.offsetTop - dist) - winHeight <= 0 ){
    sec1.classList.add('colorIn');
  }else{
    sec1.classList.remove('colorIn');
  }

  if( (sec2.offsetTip - dist) - winHeight <= 0){
    sec2.classList.add('colorIn2');
  }else{
    sec2.classList.remove('colorIn2');
  }

  if( (sec3.offsetTip - dist) - winHeight <= 0){
    sec3.classList.add('colorIn3');
  }else{
    sec3.classList.remove('colorIn3');
  }
  });
}());
