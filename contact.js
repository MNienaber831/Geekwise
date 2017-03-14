var firstName = document.querySelector('#contactpg main form div:nth-of-type(1) input[placeholder="First Name"]'),
    lastName = document.querySelector('#contactpg #contact form div:nth-of-type(1) input[placeholder="Last Name"]'),
    email = document.querySelector('#contactpg #contact form div:nth-of-type(2) input[type="email"]'),
    message = document.querySelector('#contactpg #contact form div:nth-of-type(3) textarea'),
    submitBtn = document.querySelector('#contactpg #contact form a[class="button"]');

    firstName.value = '';
    lastName.value = '';
    email.value = '';
    message.value = '';

submitBtn.addEventListener('click', function(evt){

  evt.preventDefault();
  if(firstName.value && lastName.value && email.value){
  alert('Thank you ' + firstName.value + ' ' + lastName.value + ' for wanting to reach out to me. I will get back to you as soon as possible.');
  console.log(firstName.value + ' ' + lastName.value);
  console.log(email.value);
  console.log(message.value);
  firstName.value = '';
  lastName.value = '';
  email.value = '';
  message.value = '';
}
});
