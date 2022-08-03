let str1 = "This is string1.";
let str2 = "This is string2.";
let str3 = "This is string3.";


// concat function
let fnConcat = () => document.getElementById("par1").innerHTML = document.getElementById("par2").innerHTML = str1.concat(str2, str3);

// slice function
let fnSlice = () => document.getElementById("par2").innerHTML = document.getElementById("par2").innerHTML.slice(str1.length, str1.length * 3);

// slice function as delete first char
let fnDelChar = () => document.getElementById("par2").innerHTML = document.getElementById("par2").innerHTML.slice(1);

// ToUppercase function
let fnUppercase = () => document.getElementById("par3").innerHTML = document.getElementById("par3").innerHTML.toUpperCase()

// search method
let fnSearch = () =>
{
    let position = document.getElementById("par2").innerHTML.search("string3");
    (position >= 0) ? alert("string3 starts on position " + position) : alert("string3 not found");
}

//converting number to string
let num = 2002; //number 2002
let str = num.toString(); //string '2002'

// toPrecision function
let fnToPrec = () =>
{
    let pi = 3.1415926535897932;
    document.getElementById("par5").innerHTML =
        pi.toPrecision(3) + "<br>" +
        pi.toPrecision(4) + "<br>" +
        pi.toPrecision(5) + "<br>" +
        pi.toPrecision(6) + "<br>" +
        pi.toPrecision(7) + "<br>" +
        pi.toPrecision(8) + "<br>" +
        pi.toPrecision(9) + "<br>" +
        pi.toPrecision(10) + "<br>";

}

