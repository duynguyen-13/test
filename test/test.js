document.getElementById('login-form').addEventListener('submit', function(event) {
	event.preventDefault();

	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	if (username === '' || password === '') {
		alert('Please enter both username and password.');
		return;
	}

	if (username === 'admin' && password === 'password') {
		alert('Login successful!');
		window.location.href = 'Data structure.html';
	} else {
		alert('Invalid username or password.');
	}
});


document.getElementById('username').value = 'admin';
document.getElementById('password').value = 'password';


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('username').value = 'admin';
    document.getElementById('password').value = 'password';
});