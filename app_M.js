
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


})




submitButton.addEventListener("click",function(event){
 event.preventDefault();

const userName_M = document.getElementById('firstName_M').value;
const userEmail_M = document.getElementById('email_M').value;



         const newUser = {
    name: userName_M,
    email: userEmail_M
  }


     fetch('https://api.retool.com/v1/workflows/53c0c882-cb6a-428f-a111-ba04843e9a67/startTrigger?workflowApiKey=retool_wk_04c5817f31904aa0861d905104722734', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(newUser),
  })
    .then(async response => response.text())
    .then(result => {
        window.location.href = "EarlyAccess_Complete.html"
    });



});
