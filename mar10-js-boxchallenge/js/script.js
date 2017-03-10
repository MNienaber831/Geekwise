var winH = document.querySelector('#meter li:nth-of-type(1) span'),
    winW = document.querySelector('#meter li:nth-of-type(2) span'),
    sec = document.querySelector('body'),
    nav = document.querySelector('nav'),
    secBGColor = document.querySelector('#meter input[placeholder="Section BG Color"]'),
    secTextColor = document.querySelector('#meter input[placeholder="Section text Color"]'),
    navBG = document.querySelector('#meter input[placeholder="Nav BG Color"]'),
    submit = document.querySelector('#meter input[type="submit"]');

    winH.textContent = innerHeight;
    winW.textContent = innerWidth;


window.addEventListener('resize', function(){
    winH.textContent = innerHeight;
    winW.textContent = innerWidth;
});

submit.addEventListener('click', function(evt){
  evt.preventDefault();
  var secbgColor = secBGColor.value,
      txtColor = secTextColor.value,
      bgnav = navBG.value;

  sec.style.color = txtColor;
  sec.style.backgroundColor = secbgColor;
  nav.style.backgroundColor = bgnav;

  secBGColor.value = '';
  secTextColor.value = '';
  navBG.value = '';
});
