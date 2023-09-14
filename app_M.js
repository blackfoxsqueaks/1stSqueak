
  const database = firebase.database()

  const ref = database.ref("registeredUsers")



var submitButton = document.getElementById('button_M')
submitButton.addEventListener("click",(e)=>{

    
    e.preventDefault();
    const firstName_M = document.getElementById('firstName_M').value;
    const lastName_M = document.getElementById('lastName_M').value;
    const area_M = document.getElementById('areaSelect_M').value;
    const email_M = document.getElementById('email_M').value;
    const phone_M = document.getElementById('phone_M').value;

    
    ref.push({
        firstName:firstName_M,
        lastName:lastName_M,
        area:area_M,
        email:email_M,
        phone:phone_M
    })



    window.location.href = "EarlyAccess_Complete.html";

})