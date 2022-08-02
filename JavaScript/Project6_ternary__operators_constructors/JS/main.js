function Vehicle(make, model, year, color) {
    this.Vehicle_make = make;
    this.Vehicle_model = model;
    this.Vehicle_year = year;
    this.Vehicle_color = color;
}

let Jack = new Vehicle("Dodge", "Viper", "2020", "Red");
let Emily = new Vehicle("Jeep", "Trail Hawr", "2019", "White and Black");
let Erik = new Vehicle("Ford", "Mustang", "1971", "Mustard");


function myFn() {
    document.getElementById("paragraph").innerHTML = `Erik drivers a ${Erik.Vehicle_color}-colored ${Erik.Vehicle_model} manufactured in ${Erik.Vehicle_year}`
}

function Person(first, last, dob, eye) {
    // Calculate current age (nested function)
    function getAge(dateString) {
        let today = new Date();
        let birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    this.firstName = first;
    this.lastName = last;
    this.age = getAge(dob);
    this.eyeColor = eye;
}

//create new Person object
personOlegs = new Person("Olegs", "Giruckis", "1988/08/17", "Blue");

//compare vehicle year 
function fnCompare () {
    let res = (Jack.Vehicle_year > Emily.Vehicle_year) ? "Jack's Vehicle is newer than Emily's Vehicle" : "Emily's  Vehicle is newer than Jack's Vehicle";
    document.getElementById("newPar").innerHTML = res;
}

//show in log all values of personOlegs
for (var i in personOlegs) {
    if (Object.hasOwnProperty.call(personOlegs, i)) {
        var result = personOlegs[i];
    }
    console.log(result);
}