document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const form = this;
  const inputs = form.querySelectorAll('input, textarea');
  let valid = true;

  inputs.forEach(input => {
    if (!input.checkValidity()) {
      input.style.border = '2px solid red';
      valid = false;

      // Custom message for the "Full Name" field
      if (input.name === "name" && input.value.length < 5) {
        alert("Please enter a name with at least 5 characters.");
      }

      // Custom message for the "Subject" field
      if (input.name === "subject" && input.value.length < 10) {
        alert("Please enter a subject with at least 10 characters.");
      }

      // Custom message for the "Message" field
      if (input.name === "message" && input.value.length < 20) {
        alert("Please enter a message with at least 20 characters.");
      }
    } else {
      input.style.border = '1px solid #ccc';
    }
  });

  if (valid) {
    alert('Thank you! Your message has been sent.');
    form.reset();
  }
});