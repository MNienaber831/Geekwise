var snOpen = document.getElementById('open'),
    snClose = document.getElementById('close'),
    sn = document.getElementById('sn'),
    main = document.getElementById('main'),
    smOpen = document.getElementById('smopen'),
    smOpen2 = document.getElementById('smopen1'),
    sm = document.getElementById('side-menu'),
    sm2 = document.getElementById('side-menu2');

snOpen.addEventListener("click", openNav);
snClose.addEventListener("click", closeNav);
smOpen.addEventListener("click", openSm);
smOpen2.addEventListener("click", openSM);

function openNav(){
  sn.classList.add('open');
  snOpen.style.display = "none";
  snClose.style.display = "block";
  main.classList.add('small');
}

function closeNav(){
  sn.classList.remove('open');
  snOpen.style.display = "block";
  snClose.style.display = "none";
  main.classList.remove('small');
}

function openSm(){
  if( sm.classList.contains('sm-show')){
    sm.classList.remove('sm-show');
    smOpen.classList.remove('smopen-rotate');
  }
  else{
    sm.classList.add('sm-show')
    smOpen.classList.add('smopen-rotate')
  }
}

function openSM(){
  if(sm2.classList.contains('sm-show')){
    sm2.classList.remove('sm-show');
    smOpen2.classList.remove('smopen-rotate');
  }
  else{
    sm2.classList.add('sm-show')
    smOpen2.classList.add('smopen-rotate')
  }
}
