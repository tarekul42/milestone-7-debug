/*
* 1) Create a form like the picture
* 2) Take the inputs
* 3) If you click on the "Send Name" button, the input will be set on the local storage like a picture.
*    Do the same for other send buttons.
* 4) If you click on the "Delete Name" button, the name & value will be cleared from the local storage.
*    Do the same for other Delete buttons.
* 5) If you click on the "Reset" button, the key & value will be cleared from the local storage.
*/
const getValueById = inputId =>{
    const inputField = document.getElementById(inputId)
    const inputFieldvalue = inputField.value;
    return inputFieldvalue;
}

// take and set items is local store
document.getElementById('sendNameButton').addEventListener('click', function(){
    const filedValue = getValueById('userNameInput');
    localStorage.setItem('Name', filedValue)
})
document.getElementById('sendEmailButton').addEventListener('click', function(){
    const inputField = getValueById('userEmailInput');
    localStorage.setItem('Email', inputField)
})
document.getElementById('sendMessegeButton').addEventListener('click', function(){
    const inputField = getValueById('userMessegeInput');
    localStorage.setItem('Messege', inputField)
})

// take items and remove from local store
document.getElementById('deleteNameButton').addEventListener('click', function(){
    const inputField = getValueById('userNameInput');
    localStorage.removeItem('Name', inputField)
})
document.getElementById('deleteEmailButton').addEventListener('click', function(){
    const inputField = getValueById('userEmailInput');
    localStorage.removeItem('Email', inputField)
})
document.getElementById('deleteMessegeButton').addEventListener('click', function(){
    const inputField = getValueById('userMessegeInput');
    localStorage.removeItem('Messege', inputField)
})

document.getElementById('resetButton').addEventListener('click', function(){
    localStorage.clear()
})