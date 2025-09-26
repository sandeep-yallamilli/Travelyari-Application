document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add code to send the data to a server or an email service

    // Display a response message
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = 'Thank you for your message, ' + name + '! We will get back to you soon.';
    
    // Clear the form
    document.getElementById('contactForm').reset();
});