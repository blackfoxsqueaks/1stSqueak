const formss = document.querySelectorAll('.needs-validationD');
const database_D = firebase.database();
const ref_D = database_D.ref("registeredUsers");

// Loop over them and prevent submission
Array.from(formss).forEach(form_D => {
  form_D.addEventListener('submit', e => {

    const firstName_D = document.getElementById('validationCustom10').value;
    const lastName_D = document.getElementById('validationCustom11').value;
    const area_D = document.getElementById('validationCustom12').value;
    const email_D = document.getElementById('validationCustom13').value;
    const phone_D = document.getElementById('validationCustom14').value;
    const newUser_D = { 
      firstName: firstName_D, 
      lastName: lastName_D, 
      email: email_D, 
      area: area_D, 
      phone: phone_D 
    };

    const sendtofirebase_D = () => ref_D.push({
      firstName: firstName_D,
      lastName: lastName_D,
      area: area_D,
      email: email_D,
      phone: phone_D
    });

    const sendtoretool_D = () => 
      fetch('https://us-central1-dropeg-website.cloudfunctions.net/app/api/earlyAccessForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(newUser_D),
      })
      .then(response => response.text())
      .then(result => {
        console.log('Form submitted to retool:', result);
      })
      .catch(error => {
        console.error('Error submitting form to retool:', error);
      })
      .finally(() => {
        // Redirect to the completion page regardless of success or failure
        window.location.href = "EarlyAccess_Complete.html";
      });

    if (!form_D.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      sendtofirebase_D();
      sendtoretool_D();
    }

    form_D.classList.add('was-validated');
  }, false);
});
