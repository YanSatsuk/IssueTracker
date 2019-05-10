import View from './view.js';

export default {
  init() {
    const submitForm = document.getElementById("submit-form");
    const registrationTemplate = document.getElementById('registrationTemplate');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    submitForm.addEventListener('submit', event => {
      event.preventDefault();
      event.stopPropagation();
      const activeButtonId = document.activeElement.id;
      let url = '';

      const data = {
        email: email.value,
        password: password.value
      };

      function postRequestOnServer (url, data) {
        const options = {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        };

        fetch(url, options)
        .then(response => {
          submitForm.innerHTML = 'user account page';
          console.log(response)
        })
        .catch(response => console.log(response))
      }



      switch (activeButtonId) {
        case 'log-in':
          url += 'api/users/login.php';
          postRequestOnServer(url, data);
          break;

        case 'sign-up':
          submitForm.innerHTML = View.render(registrationTemplate);
          break;

        case 'registration':
          url += 'api/users/register.php';
          const userName = document.getElementById('user-name');
          data.login = userName.value;
          postRequestOnServer(url, data);
          break;
      }

    })
  }
}