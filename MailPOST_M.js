
        const newUser = {
    name: 'Test Succ',
    email: 'hiii@drop.com',
  }
 


var submitButton = document.getElementById('button_M')
submitButton.addEventListener("click",function(event){
 event.preventDefault();


     fetch('https://webhook-test.com/adc9f67f43787a37cfac7f3d7e4ddcc2', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(newUser),
  })


})






   
