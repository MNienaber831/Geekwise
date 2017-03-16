var photoshop1 = document.querySelector('#projects .parent .websites img[src="img/Portfolioproject.jpg"]'),
    parent1 = document.querySelector('#projects .parent .websites:nth-of-type(1)'),
    rentabike2 = document.querySelector('#projects .parent .websites img[src="img/Screenshot (3).png"]'),
    parent2 = document.querySelector('#projects .parent .websites:nth-of-type(2)'),
    editorial3 = document.querySelector('#projects .parent .websites img[src="img/Screenshot (5).png"]'),
    parent3 = document.querySelector('#projects .parent .websites:nth-of-type(3)'),
    projection4 = document.querySelector('#projects .parent .websites img[src="img/Screenshot (1).png"]'),
    parent4 = document.querySelector('#projects .parent .websites:nth-of-type(4)'),
    assembly5 = document.querySelector('#projects .parent .websites img[src="img/Screenshot (2).png"]'),
    parent5 = document.querySelector('#projects .parent .websites:nth-of-type(5)'),
    theBerrock6 = document.querySelector('#projects .parent .websites img[src="img/Screenshot (4).png"]'),
    parent6 = document.querySelector('#projects .parent .websites:nth-of-type(6)'),
    myStory7 = document.querySelector('#projects .parent .websites a[href="feb06-js-story"]'),
    parent7 = document.querySelector('#projects .parent .websites:nth-of-type(7)'),
    h4Div = document.createElement('div'),
    h4 = document.createElement('h4');


photoshop1.addEventListener('mouseover', function(){
  h4.textContent = 'Photoshop';
  parent1.appendChild(h4Div);
  h4Div.appendChild(h4);
});
photoshop1.addEventListener('mouseout', function(){
  h4Div.removeChild(h4);
  parent1.removeChild(h4Div);
  h4.textContent = '';
});

rentabike2.addEventListener('mouseover', function(){
  h4.textContent = 'Rent a Bike';
  parent2.appendChild(h4Div);
  h4Div.appendChild(h4);
});
rentabike2.addEventListener('mouseout', function(){
  h4Div.removeChild(h4);
  parent2.removeChild(h4Div);
  h4.textContent = '';
});

editorial3.addEventListener('mouseover', function(){
  h4.textContent = 'Editorial - SCSS';
  parent3.appendChild(h4Div);
  h4Div.appendChild(h4);
});
editorial3.addEventListener('mouseout', function(){
  h4Div.removeChild(h4);
  parent3.removeChild(h4Div);
  h4.textContent = '';
});

projection4.addEventListener('mouseover', function(){
  h4.textContent = 'Projection';
  parent4.appendChild(h4Div);
  h4Div.appendChild(h4);
});
projection4.addEventListener('mouseout', function(){
  h4Div.removeChild(h4);
  parent4.removeChild(h4Div);
  h4.textContent = '';
});

assembly5.addEventListener('mouseover', function(){
  h4.textContent = 'Assembly';
  parent5.appendChild(h4Div);
  h4Div.appendChild(h4);
});
assembly5.addEventListener('mouseout', function(){
  h4Div.removeChild(h4);
  parent5.removeChild(h4Div);
  h4.textContent = '';
});

theBerrock6.addEventListener('mouseover', function(){
  h4.textContent = 'The Berrock Shop';
  parent6.appendChild(h4Div);
  h4Div.appendChild(h4);
});
theBerrock6.addEventListener('mouseout', function(){
  h4Div.removeChild(h4);
  parent6.removeChild(h4Div);
  h4.textContent = '';
});

myStory7.addEventListener('mouseover', function(){
  h4.textContent = 'Javascipt Story';
  parent7.appendChild(h4);
});
myStory7.addEventListener('mouseout', function(){
  parent7.removeChild(h4);
  h4.textContent = '';
});
