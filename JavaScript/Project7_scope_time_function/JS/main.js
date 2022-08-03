let varGlobal = "Global Variable"; //global variable

function myFn() {
    let currentHour = new Date().getHours(); //local variable
    let greeting = "Hello"; //default value which will be used for 11pm to 5am


    if (currentHour > 4 && currentHour < 12) //5am to 12pm
        greeting = "Good morning";
    if (currentHour > 11 && currentHour < 18) //12pm to 6pm
        greeting = "Good afternoon";
    if (currentHour > 17 && currentHour < 23) //6pm to 11pm
        greeting = "Good evening";

    if (document.getElementById("nameInput").value)  //check if nameInput is not empty
        document.getElementById("par1").innerHTML = greeting + ", " + document.getElementById("nameInput").value 
    else
        document.getElementById("par1").innerHTML = greeting;
}


/* 
This funcion call will return an error in console (because it's trying to use local variable from different scope): 
Uncaught ReferenceError: currentHour is not defined
    at fnWithError (main.js:22:5)
    at HTMLButtonElement.onclick (index.html:15:51)
*/
function fnWithError () {
    if (currentHour > 11)
        alert("function works");
    else
        alert("error");
}