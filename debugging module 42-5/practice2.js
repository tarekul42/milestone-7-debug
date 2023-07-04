const userInput = confirm('You want to show your current location?')
if(userInput === true){
    console.log(window.location.href);
}
else{
    console.log("Nothing else here for you");
}
