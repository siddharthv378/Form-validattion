function validateForm(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const contact = document.getElementById('contact').value;
    const message = document.getElementById('message').value;

    let isValid = true;

    // Validate username
    if (username.length < 3) {
        alert("Username must be at least 3 characters long.");
        isValid = false;
    }

    // Validate email
    if (!email.includes('@') || !email.includes('.')) {
        alert("Please enter a valid email address.");
        isValid = false;
    }

    // Validate password (min 8 chars, 1 uppercase, 1 number, 1 special char)
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long, include an uppercase letter, a number, and a special character.");
        isValid = false;
    }

    // Validate contact number (exactly 10 digits)
    const contactPattern = /^\d{10}$/;
    if (!contactPattern.test(contact)) {
        alert("Contact number must be exactly 10 digits.");
        isValid = false;
    }

    // Validate message
    if (message.trim().length < 10) {
        alert("Message or address must be at least 10 characters long.");
        isValid = false;
    }

    // If all validations pass, proceed
    if (isValid) {
        alert("Registration successful!");
        document.getElementById('registrationForm').reset();
    }
}
