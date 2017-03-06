var div = document.getElementById('modal');



function createModal(modalType, modalMsg){
  div.classList.add('active');

    var form = document.createElement('form'),
        message = document.createElement('p'),
        textBox = document.createElement('input'),
        modalDiv = document.createElement('div'),
        confirmBtn = document.createElement('input'),
        cancelBtn = document.createElement('input');

  message.textContent = modalMsg;

  textBox.type = 'text';
  textBox.placeholder = 'Your Response';

  confirmBtn.type = 'submit';
  confirmBtn.value = 'Confirm';

  cancelBtn.type = 'button';
  cancelBtn.value = 'Cancel';

  form.append(message);
if(modalType === 'prompt'){
    form.append(textBox);
    modalDiv.appendChild(cancelBtn);
  }else if(modalType === 'confirm'){
    modalDiv.append(cancelBtn);
  }
  modalDiv.append(confirmBtn);
  form.append(modalDiv);

  div.appendChild(form);

  cancelBtn.addEventListener('click', function(){
    div.removeChild(form);
    div.classList.remove('active');
  });

  confirmBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    var userInput = textBox.value;
    if(textBox.value){
      console.log(userInput);
    }
    div.removeChild(form);
    div.classList.remove('active');
  });
}

// createModal('alert', 'Do you like licorice?');
