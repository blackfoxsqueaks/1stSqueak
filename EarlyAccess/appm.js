const form1 = document.getElementById('../app.js/contactForm_M')



form1.addEventListener("submit",(e)=>{
    
    e.preventDefault();

    const firstName = document.getElementById('../app.js/firstName_M').value;
    const lastName = document.getElementById('../app.js/lastName_M').value;
    const email = document.getElementById('../app.js/app.js/email_M').value;
    const phone = document.getElementById('../app.js/phone_M').value;

    
    ref.push({
        firstName:firstName_M,
        lastName:lastName_M,
        email:email_M,
        phone:phone_M
    })


    form1.reset()

})