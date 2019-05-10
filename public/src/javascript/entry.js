import Router from './router.js';
import View from './view.js';

(function ready() {
  const submitForm = document.getElementById('submit-form')
  const loginForm = document.getElementById('loginTemplate');
  submitForm.innerHTML = View.render(loginForm);
  Router.init();
})();