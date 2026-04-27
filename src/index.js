// Получаем кнопки
const btnLogin = document.getElementById('btn-login');
const btnRegister = document.getElementById('btn-register');
const initialButtons = document.getElementById('initial-buttons');

// Получаем формы
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// При клике на "Вход" показываем форму входа, скрываем кнопки
btnLogin.addEventListener('click', () => {
  loginForm.classList.remove('hidden');
  registerForm.classList.add('hidden');
  initialButtons.classList.add('hidden');
});

// При клике на "Регистрация" показываем форму регистрации, скрываем кнопки
btnRegister.addEventListener('click', () => {
  registerForm.classList.remove('hidden');
  loginForm.classList.add('hidden');
  initialButtons.classList.add('hidden');
});