(() => {
  'use strict';

  // Get form and elements
  const form = document.querySelector('.needs-validationM');
  const button = document.getElementById('button'); // Submit button

  // Function to show spinner
  const showSpinner = () => {
    button.innerHTML = 'Submitting...';
    button.disabled = true;
  };

  // Function to restore button text
  const restoreButton = () => {
    button.innerHTML = 'Submit';
    button.disabled = false;
  };

  // Form submit event
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    // Get form values
    const firstName = document.getElementById('validationCustom01').value;
    const lastName = document.getElementById('validationCustom02').value;
    const area = document.getElementById('validationCustom03').value;
    const email = document.getElementById('validationCustom04').value;
    const phone = document.getElementById('validationCustom05').value;

    const userData = { firstName, lastName, area, email, phone };

    // Show spinner on button
    showSpinner();

    // Send request to Vercel function
    fetch('https://drop-server.vercel.app/api/earlyAccessForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        if (data.error === "User already registered") {
          alert("You are already registered with this email or phone number.");
        } else {
          alert("An error occurred. Please try again in a few.");
        }
      } else {
        console.log('Form submitted successfully:', data.message);
        window.location.href = "early-access-form-complete.html"; // Redirect on success
      }
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      alert("An error occurred. Please try again in a few.");
    })
    .finally(() => {
      restoreButton();
    });

    form.classList.add('was-validated');
  });
})();