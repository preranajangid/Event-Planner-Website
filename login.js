document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email || !password) {
    alert('Please fill in all fields.');
  } else if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
  } else {
    alert('Login successful!');
    // Here you can send the data to your backend server
  }
});