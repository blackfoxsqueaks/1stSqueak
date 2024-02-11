(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validationM');
  const database = firebase.database();
  const ref = database.ref("registeredUsers");

  // Function to send data to Firebase
  const sendtofirebase = (newUser) => ref.push(newUser);

  // Function to send data to ReTool
  const sendtoretool = (newUser) => {
    fetch('https://us-central1-dropeg-website.cloudfunctions.net/app/api/earlyAccessForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(newUser),
    })
    .then(async response => response.text())
    .then(result => {
      window.location.href = "EarlyAccess_Complete.html";
    });
  };
  

  // Loop over forms and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault(); // Prevent form submission
      form.classList.add('was-validated'); // Add validation class

      // Collect form data
      const firstName_M = document.getElementById('validationCustom01').value;
      const lastName_M = document.getElementById('validationCustom02').value;
      const area_M = document.getElementById('validationCustom03').value;
      const email_M = document.getElementById('validationCustom04').value;
      const phone_M = document.getElementById('validationCustom05').value;
      const newUser = { firstName: firstName_M, lastName: lastName_M, email: email_M, area: area_M, phone: phone_M };

      // Check form validity
      if (!form.checkValidity()) {
        event.stopPropagation(); // Stop event propagation if form is invalid
        return;
      }

      // Send data to Firebase
      sendtofirebase(newUser)
      .then(() => {
        // Once data is sent to Firebase, trigger sending to ReTool
        sendtoretool(newUser);
      })
      .catch(error => {
        console.error("Error sending data to Firebase:", error);
      });
    });
  });
})();
