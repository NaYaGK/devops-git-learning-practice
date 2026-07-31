const form = document.getElementById('loginForm');
const errorMsg = document.getElementById('error-msg');

// Hardcoded mock credentials — replace with API call in production
const MOCK_USER = {
  email: 'user@example.com',
  password: 'password123'
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  handleLogin();
});
window.addEventListener('load', function () {
  const remembered = localStorage.getItem('rememberedEmail');
  if (remembered) {
    document.getElementById('email').value = remembered;
    document.getElementById('rememberMe').checked = true;
  }
});

function handleLogin() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
const rememberMe = document.getElementById('rememberMe').checked;

  clearError();

  if (!email || !password) {
    showError('Email and password are required.');
    return;
  }

  if (email === MOCK_USER.email && password === MOCK_USER.password) 
	{
	if (rememberMe) {
      localStorage.setItem('rememberedEmail', email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }
       alert('Login successful! Redirecting...');
    // window.location.href = '/dashboard.html';
  } else {
    showError('Invalid email or password. Please try again.');
  }
}

function showError(message) {
  errorMsg.textContent = message;
  errorMsg.classList.remove('hidden');
}

function clearError() {
  errorMsg.textContent = '';
  errorMsg.classList.add('hidden');
}
document.getElementById('togglePassword').addEventListener('click', function () {
  const passwordInput = document.getElementById('password');
  const isHidden = passwordInput.type === 'password';
  passwordInput.type = isHidden ? 'text' : 'password';
  this.textContent = isHidden ? 'Hide' : 'Show';
});

