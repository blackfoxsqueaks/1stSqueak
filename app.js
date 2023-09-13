const form = document.getElementById('contactForm')

const firebaseConfig = {
  apiKey: "AIzaSyCpDOPmvE_vtzB3Q2tW1YUMAFm25rHhGls",
  authDomain: "dropeg-website.firebaseapp.com",
  databaseURL: "https://dropeg-website-default-rtdb.firebaseio.com/",
  projectId: "dropeg-website",
  storageBucket: "dropeg-website.appspot.com",
  messagingSenderId: "1045537071206",
  appId: "1:1045537071206:web:2935f75d70b54a5ccdcda7",
  measurementId: "G-1B0GR0ZG7E"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const database = firebase.database()

  const ref = database.ref("registeredUsers")


form.addEventListener("submit",(e)=>{
    
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const area = document.getElementById('areaSelect').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const firstName_M = document.getElementById('firstName_M').value;
    const lastName_M = document.getElementById('lastName_M').value;
    const area_M = document.getElementById('areaSelect_M').value;
    const email_M = document.getElementById('email_M').value;
    const phone_M = document.getElementById('phone_M').value;

    
    ref.push({
        firstName:firstName,
        lastName:lastName,
        area:area,
        email:email,
        phone:phone,
        
        firstName:firstName_M,
        lastName:lastName_M,
        area:area_M,
        email:email_M,
        phone:phone_M
    })


    form.reset()




    window.location.href = "EarlyAccess_Complete.html";


})