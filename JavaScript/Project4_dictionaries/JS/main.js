// creating object "infoPerson1"
const infoPerson1 = {
    Name: "Olegs",
    Gender: "Male",
    Hair: "Blonde",
    Eye: "Blue",
    Age: getAge("1988/08/17")
}

// creating object "infoPerson2"
const infoPerson2 = {
    Name: "Andrew",
    Gender: "Male",
    Hair: "Brown",
    Eye: "Green",
    Age: getAge("1979/12/29")
}

// Calculate current age
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


//"opening" infoPerson in paragraph
function getInfo(a, b) {
    delete a.Gender; //deleting Gender property before showing up info
    document.getElementById(b).innerHTML = "" //clears the paragraph
    for (var i in a) {
        document.getElementById(b).innerHTML += i + ": " + a[i] + "<br />"; //adding KVP to paragraph
    }

}

