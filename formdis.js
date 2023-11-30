function enableSubmit(){
let inputs = document.getElementsByClassName('mb-3'); // Enter your class name for a required field, this should also be reflected within your form fields.
let btn = document.getElementById('button_M');
let isValid = true;
for (var i = 0; i < inputs.length; i++){
let changedInput = inputs[i];
if (changedInput.value.trim() === "" || changedInput.value === null){
isValid = false;
break;
}
}
btn.style.background = "#000000";
}