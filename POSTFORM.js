    (() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validationM');

const database = firebase.database();

const ref = database.ref("registeredUsers");


    
  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {

   const firstName_M = document.getElementById('validationCustom01').value;
    const lastName_M = document.getElementById('validationCustom02').value;
    const area_M = document.getElementById('validationCustom03').value;
    const email_M = document.getElementById('validationCustom04').value;
    const phone_M = document.getElementById('validationCustom05').value;
    const newUser = { name: firstName_M, email: email_M };


    const sendtofirebase = () => ref.push(

    {
        firstName:firstName_M,
        lastName:lastName_M,
        area:area_M,
        email:email_M,
        phone:phone_M
    }

    );

    const sendtoretool = () => 
     fetch('https://api.retool.com/v1/workflows/53c0c882-cb6a-428f-a111-ba04843e9a67/startTrigger?workflowApiKey=retool_wk_04c5817f31904aa0861d905104722734', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(newUser),
  })
    .then(async response => response.text())
    .then(result => {window.location.href = "EarlyAccess_Complete.html" });


      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {


    event.preventDefault()


    sendtofirebase();
    sendtoretool();


      }

      form.classList.add('was-validated')


    }, false)


  })


})()
