(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validationM');

  const firestore = firebase.firestore(); // Get Firestore reference
  const usersRef = firestore.collection("earlyAccessUsers"); // Reference to the Firestore collection

  // Function to change the button text to a spinner
  const showSpinner = (button) => {
    button.innerHTML = 'Submitting...';
    button.disabled = true; // Optionally disable the button to prevent multiple clicks
  };

  // Function to check for existing user
  const checkUserExists = (email, phone) => {
    return usersRef.where("email", "==", email).get().then(emailSnapshot => {
      if (!emailSnapshot.empty) {
        // Email exists, return true
        return true;
      }
      // Check for phone
      return usersRef.where("phone", "==", phone).get().then(phoneSnapshot => {
        return !phoneSnapshot.empty; // Return true if phone exists
      });
    });
  };

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {

      const firstName_M = document.getElementById('validationCustom01').value;
      const lastName_M = document.getElementById('validationCustom02').value;
      const area_M = document.getElementById('validationCustom03').value;
      const email_M = document.getElementById('validationCustom04').value;
      const phone_M = document.getElementById('validationCustom05').value;
      const newUser = { 
        firstName: firstName_M, 
        email: email_M 
      };

      // Prevent form submission if it is invalid
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        
        // Check if user with the same email or phone exists
        checkUserExists(email_M, phone_M).then(userExists => {
          if (userExists) {
            // Show a popup alert that the user is already registered
            alert("You are already registered with this email or phone number.");
          } else {
            const button = document.getElementById('button'); // Get the button element
            showSpinner(button); // Change the button to a spinner
            
            // Save to Firestore and then send to Retool
            usersRef.add({
              firstName: firstName_M,
              lastName: lastName_M,
              area: area_M,
              email: email_M,
              phone: phone_M
            })
            .then(() => {
              console.log('User saved to Firestore successfully.');
              return fetch('https://drop-server.vercel.app/api/earlyAccessForm', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(newUser),
              });
            })
            .then(response => response.text())
            .then(result => {
              console.log('Form submitted to retool:', result);
              // Redirect to the completion page regardless of success or failure
              window.location.href = "early-access-form-complete.html";
            })
            .catch(error => {
              console.error('Error submitting form:', error);
            });
          }
        });
      }

      form.classList.add('was-validated');
    }, false);
  });
})();