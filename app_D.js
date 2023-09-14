const formr = document.getElementById('contactForm_D')


  const databases = firebase.database()

  const refr = databases.ref("registeredUsers")

var submitButtonD = document.getElementById('button_D')
submitButtonD.addEventListener("click",(e)=>{
    
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const area = document.getElementById('areaSelect').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    
    refr.push({
        firstName:firstName,
        lastName:lastName,
        area:area,
        email:email,
        phone:phone
    })


    formr.reset()




    window.location.href = "EarlyAccess_Complete.html";


})