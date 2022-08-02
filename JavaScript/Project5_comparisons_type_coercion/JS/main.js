let age;

//input age. If user enters NaN or 0, keep asking
do {
   age = parseInt(prompt("Please enter your age!"))
} while (isNaN(age) || !age);



if (age>17) {
    document.write("You are an adult! <br>")
}
if (age>12 && age<18) {
    document.write("You're a teenager!<br>")
}



document.write(`The data type of ${age} is a ${typeof (age)}<br>`)

let a = '25';
let b = 25;

if (a === b) {
    document.write(`Value and Type of ${a} and ${b} are equal!<br>`)
} 
else if (a == b) {
    document.write(`Value of ${a} and ${b} are equal, but types are different!<br>`)
}
else
{
    document.write(`Value of ${a} and ${b} are not equal!<br>`)
}

document.write(a + b);