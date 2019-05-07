'use strict';

const logIn = document.getElementById('log-in');
const signUp = document.getElementById('sign-up');

const email = document.getElementById('email');
const password = document.getElementById('password');

const submitForm = document.getElementById("submit-form");


let isRegister = false;



console.log(submitForm.childNodes);

submitForm.addEventListener('submit', event => {
  event.preventDefault();

const data = {
  email,
  password
};

const options = {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
};

  let url = '';
  
  // const message = isRegister ? 'signup' : 'login';
  // console.log(message);

  if (isRegister) {
    url = url + 'api/users/register.php';
      fetch(`/${url}`, options)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
})


signUp.addEventListener('click', () => {
  isRegister = true;
})
