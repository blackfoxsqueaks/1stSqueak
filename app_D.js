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



})

submitButtonD.addEventListener("click",function(event){
 event.preventDefault();

const userName_D = document.getElementById('firstName').value;
const userEmail_D = document.getElementById('email').value;



         const newUser_D = {
    name: userName_D,
    email: userEmail_D
  }


     fetch('https://api.retool.com/v1/workflows/53c0c882-cb6a-428f-a111-ba04843e9a67/startTrigger?workflowApiKey=retool_wk_04c5817f31904aa0861d905104722734', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(newUser_D),
  })
    .then(async response => response.text())
    .then(result => {
        window.location.href = "EarlyAccess_Complete.html"
    });



})
