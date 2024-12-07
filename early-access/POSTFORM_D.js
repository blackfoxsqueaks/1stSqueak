(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validationD');

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

      const firstName_D = document.getElementById('validationCustom10').value;
      const lastName_D = document.getElementById('validationCustom11').value;
      const area_D = document.getElementById('validationCustom12').value;
      const email_D = document.getElementById('validationCustom13').value;
      const phone_D = document.getElementById('validationCustom14').value;
      const newUser_D = { 
        firstName: firstName_D, 
        lastName: lastName_D, 
        area: area_D, 
        email: email_D, 
        phone: phone_D 
      };

      // Prevent form submission if it is invalid
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        
        // Check if user with the same email or phone exists
        checkUserExists(email_D, phone_D).then(userExists => {
          if (userExists) {
            // Show a popup alert that the user is already registered
            alert("You are already registered with this email or phone number.");
          } else {
            const button_DD = document.getElementById('button_DD'); // Get the button element
            showSpinner(button_DD); // Change the button text to "Submitting..."

            // Save to Firestore and then send to Retool
            usersRef.add(newUser_D)
              .then(() => {
                console.log('User saved to Firestore successfully.');
                return fetch('https://drop-server.vercel.app/api/earlyAccessForm', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                  },
                  body: JSON.stringify(newUser_D), // Send the same user data to Retool
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
