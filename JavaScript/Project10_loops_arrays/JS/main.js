let Animal = ["Cat", "Dog", "Cow", "Snake", "Lion", "Tiger", "Fox"]; //define an array 'Animal'
let Person = ["Olegs", "Anna", "Peter"]; //define an array 'Person'

Person[0] = { name: "Olegs", Gender: "Male", Age: 33, Eye: "Blue", Hair: "Blonde" };
Person[1] = { name: "Anna", Gender: "Female", Age: 32, Eye: "Grey", Hair: "Black" };
Person[2] = { name: "Peter", Gender: "Male", Age: 39, Eye: "Green", Hair: "Brown" };

//define studentInfo object
let studentInfo = {
    name: "James",
    Age: getAge("2000/04/29"), //this is method of this object
    Mark: 8
};


const getPersonInfo = (index) => {
    let text = "\n" + "Name: " + Person[index].name + "\n";
    text += "Gender: " + Person[index].Gender + "\n";
    text += "Age: " + Person[index].Age + "\n";
    text += "Eye: " + Person[index].Eye + "\n";
    text += "Hair: " + Person[index].Hair + "\n";
    alert(text);
}


// Calculate current age
function getAge(dob) {
    let today = new Date();
    let birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

//show persons list function
const showPersonList = () => {
    let text = "";
    for (let i = 0; i < Person.length; i++) {
        text += i + 1 + ". " + Person[i].name + "<br>"
    }
    document.getElementById("par1").innerHTML = text;
}

//show animals list function
const showAnimalsList = () => {
    let text = "";
    let i = 0;
    while (i < Animal.length) {
        text += i + 1 + ". " + Animal[i] + "<br>"
        i++;
    }
    document.getElementById("par2").innerHTML = text;
}