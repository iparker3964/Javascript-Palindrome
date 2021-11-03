//get our user input
function getValue(){
    //make alert invisible
    document.getElementById("alert").classList.add("invisible");
    //get user string from the page
    let userString = document.getElementById("userString").value;
    //check if palindrome
    let resultObj = checkForPalidrome(userString)
    //display message to screen
    displayMsg(resultObj);
}
//check if palindrome
function checkForPalidrome(userString){
    userString = userString.toLowerCase();
    //remove spaces and special chars
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex,"");

    let revString = [];
    let returnObj = {};
    for(let i = userString.length - 1; i >= 0; i--){
        revString+= userString[i];
    }

    if(userString == revString){
        returnObj.msg="Well done! You entered a Palidrome!";
    }
    else{
        returnObj.msg = "Sorry! You did not enter a Palidrome!";
    }
    returnObj.reversed = revString;
    return returnObj;
}
//display a messasge to the string
function displayMsg(returnObj){
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is ${returnObj.reversed}`;
    //remove invisible class from alert
    document.getElementById("alert").classList.remove("invisible");
}