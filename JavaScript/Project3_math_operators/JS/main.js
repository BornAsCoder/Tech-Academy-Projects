//concatenating template string. Named function.
function fnShow() {
    document.getElementById("Math").innerHTML += `, it's equal to ${365 * 24} hours, or ${365 * 24 * 60} seconds`
}

//Returning initial string. Arrow function assigned to variable
const fnHide = _ => document.getElementById("Math").innerHTML = "If a year have 365 days"

//calculating sum of two numbers.
function fnAdd(a, b) {
    document.getElementById("opSign").innerHTML = " +"
    if (isNaN(a) || isNaN(b)) { //If any of two values is not a number - return string "No Result"
        document.getElementById("result").value = "No Result"
    }
    else {
        let res = a + b;
        document.getElementById("result").value = res
    }
}

//calculating subtraction of two numbers.
function fnSubtr(a, b) {
    document.getElementById("opSign").innerHTML = " -"
    if (isNaN(a) || isNaN(b)) { //If any of two values is not a number - return string "No Result"
        document.getElementById("result").value = "No Result"
    }
    else {
        let res = a - b;
        document.getElementById("result").value = res
    }
}

//calculating multiplication of two numbers.
function fnMult(a, b) {
    document.getElementById("opSign").innerHTML = " *"
    if (isNaN(a) || isNaN(b)) { //If any of two values is not a number - return string "No Result"
        document.getElementById("result").value = "No Result"
    }
    else {
        let res = a * b;
        document.getElementById("result").value = res
    }
}

//calculating division of first number by second number
function fnDiv(a, b) {
    document.getElementById("opSign").innerHTML = " /"
    if (isNaN(a) || isNaN(b) || b===0) { //If any of two values is not a number or if second number is 0 - return string "No Result"
        document.getElementById("result").value = "No Result"
    }
    else {
        let res = a / b;
        document.getElementById("result").value = res
    }
}

//calculating reminder after division of first number by second number
function fnMod(a, b) {
    document.getElementById("opSign").innerHTML = " %"
    if (isNaN(a) || isNaN(b) || b === 0) { //If any of two values is not a number or if second number is 0 - return string "No Result"
        document.getElementById("result").value = "No Result"
    }
    else {
        let res = a % b;
        document.getElementById("result").value = res
    }
}

 /* decrement and increment functions of element year (btw it can be done without extra 
 buttons and functions as input type "number" adds buttons by default) */

const fnDecr = (a) => document.getElementById("year").value--

const fnInc = (a) => document.getElementById("year").value++


// gives random integer number between 1 and entered number
const fnRandom = (a) => window.alert(Math.floor((Math.random()*a))+1)


