const showLogin = document.getElementById('show-login');
const showSignup = document.getElementById('show-signup');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const message = document.getElementById('auth-message');

showLogin.onclick = () => {
  showLogin.classList.add('active');
  showSignup.classList.remove('active');
  loginForm.style.display = '';
  signupForm.style.display = 'none';
  message.textContent = '';
};
showSignup.onclick = () => {
  showSignup.classList.add('active');
  showLogin.classList.remove('active');
  loginForm.style.display = 'none';
  signupForm.style.display = '';
  message.textContent = '';
};

loginForm.onsubmit = e => {
  e.preventDefault();
  message.textContent = 'Logged in (demo only)';
};
signupForm.onsubmit = e => {
  e.preventDefault();
  message.textContent = 'Signed up (demo only)';
}; 