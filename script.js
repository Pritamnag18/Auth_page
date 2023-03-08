
		// Get the form and error element
		const form = document.querySelector('form');
		const error = document.querySelector('.error');

		// Add an event listener to the form on submission
		form.addEventListener('submit', (event) => {
			// Get the values of the username and password fields
			const username = document.querySelector('#username').value.trim();
			const password = document.querySelector('#password').value.trim();
			// const confirm_password = document.querySelector('#confirm_password').value.trim();

			// Check if any fields are empty
			if (!username || !password || !confirm_password) {
				event.preventDefault();
				error.textContent = 'Please fill in all fields.';
				return;
			}

			// Check if passwords match
			if (password !== confirm_password) {
				event.preventDefault();
				error.textContent = 'Passwords do not match.';
				return;
			}
			
			// Check if password is long enough
			if (password.length < 8) {
				event.preventDefault();
				error.textContent = 'Password must be at least 8 characters long.';
				return;
			}

			// Clear any previous errors and submit the form
			error.textContent = '';
		});
	