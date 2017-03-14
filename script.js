var indexMain = document.querySelector('#main main')
    bioHead = document.querySelector('#main main h2'),
    bioHeadDiv = document.querySelector('#main main > div'),
    p = document.createElement('p'),

    p.textContent = 'Click For More';
    // p.style.textAlign = 'left';
    p.style.fontSize = '12px';
    p.style.padding = '0';
    p.style.margin = '0';
    p.style.color = 'hsl(168, 22%, 50%)';
    // p.style.display = 'absolute';
    // p.style.left = '0';
    // p.style.float = 'right';


bioHead.addEventListener('mouseover', function(){
  bioHeadDiv.appendChild(p);
});

bioHead.addEventListener('mouseout', function(){
  bioHeadDiv.removeChild(p);
});
