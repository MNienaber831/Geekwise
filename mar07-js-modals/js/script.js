// var content = document.getElementById('content');
//
//
//
// function popupModal(modalType, modalMsg){
//   content.classList.add('active');
//
//   var form = document.createElement('form'),
//       div = document.createElement('div'),
//       message = document.createElement('p'),
//       textBox = document.createElement('input'),
//       cancelBtn = document.createElement('input'),
//       confirmBtn = document.createElement('input');
//   content.appendChild(form);
//
//   message.textContent = modalMsg;
//
//   textBox.type = 'text';
//   textBox.placeholder = 'Your Response';
//
//   cancelBtn.type = 'button';
//   cancelBtn.value = 'Cancel';
//
//   confirmBtn.type = 'submit';
//   confirmBtn.value = 'Confirm';
//
//   form.appendChild(message);
//   if(modalType === 'prompt'){
//     form.appendChild(textBox);
//     div.appendChild(cancelBtn);
//   }else if(modalType === 'confirm'){
//     div.appendChild(cancelBtn)
//   }
//   div.appendChild(confirmBtn);
//   form.appendChild(div);
//
//   cancelBtn.addEventListener('click', function(){
//     content.classList.remove('active');
//     content.remove();
//   });
//
//   confirmBtn.addEventListener('click', function(evt){
//     evt.preventDefault();
//     if(textBox.value){
//       console.log(textBox.value);
//     }
//   content.remove();
//   content.classList.remove('active');
//   });
// }
//
// // popupModal('prompt', 'Stop that you dummy');

var form = document.querySelector('form');
//
// form.childNodes.forEach(function(e, i){
//   console.log(e);
// });

// console.log(window);

/**
if('childElementCount' in window){

  for (var i = 0; i < form.childElementCount.length; i++) {
    console.log(form.childElementCount[i]);
  }
}else{

  for (var i = 0; i < form.children.length; i++) {
    console.log(form.children[i]);
  }
}
**/

// for (var i = 0; i < form.children.length; i++) {
//   console.log(form.children[i]);
// }

// IN keyword

console.log(form);

var formArr = [];

formArr.push(form.childElementCount);
formArr.push(form.childNodes);
formArr.push(form.contentEditable);
formArr.push(form.contextMenu);
formArr.push(form.dataset);

console.log(formArr);
