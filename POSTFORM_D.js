
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
    const newUser_D = { name: firstName_D, email: email_D };


    const sendtofirebase_D = () => ref_D.push(

    {
        firstName:firstName_D,
        lastName:lastName_D,
        area:area_D,
        email:email_D,
        phone:phone_D
    }

    );

    const sendtoretool_D = () => 
     fetch('https://api.retool.com/v1/workflows/53c0c882-cb6a-428f-a111-ba04843e9a67/startTrigger?workflowApiKey=retool_wk_04c5817f31904aa0861d905104722734', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(newUser_D),
  })
    .then(async response => response.text())
    .then(result => {window.location.href = "EarlyAccess_Complete.html" });


      if (!form_D.checkValidity()) {
        e.preventDefault()
        e.stopPropagation()
      } else {


    e.preventDefault()


    sendtofirebase_D();
    sendtoretool_D();


      }

      form_D.classList.add('was-validated')


    }, false)


  })

