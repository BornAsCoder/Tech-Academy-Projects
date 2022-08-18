let runningTotal = 0;
let selectedSize, sizePrice, subTotal;
let textSize = "";
let textTopping = "";
let counter = 0;  // counter of total pizzas added
let textFinal = [] // text array for checkout




function addToOrder() {
    // This initializes our string so it can get passed from
    // function to function, growing line by line into a full receipt
    sizePrice = 0;  // reset sizePrice
    textSize = "";  // reset textSize
    let sizeArray = document.getElementsByClassName("size");  // define and assign all "size" class elements to sizeArray
    // go through array to find a selected size
    for (let i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            selectedSize = sizeArray[i].value; // Assign selectedSize 
            sizeArray[i].checked = false;     // reset "Size" radio buttons
            break; // break loop early if condition is met
        }
    }

    // check price of selected size and assign it to sizePrice
    if (selectedSize === "Extra Small Pizza") {
        sizePrice = 3.00;
    } else if (selectedSize === "Personal Pizza") {
        sizePrice = 5.00;
    } else if (selectedSize === "Small Pizza") {
        sizePrice = 7.00;
    } else if (selectedSize === "Medium Pizza") {
        sizePrice = 9.00;
    } else if (selectedSize === "Large Pizza") {
        sizePrice = 12.00;
    } else if (selectedSize === "Extra Large Pizza") {
        sizePrice = 16.00;
    }

    // 
    if (selectedSize) { textSize = "<strong>" + selectedSize + "</strong><br>£" + sizePrice + ".00<br>" } 
    
    //these variables will get passed on to each function
    getTopping(sizePrice);

};

function getTopping(sizePrice) {
    let toppingTotal = 0; // reset toppingTotal
    textTopping = "";     // reset textTopping
    let selectedToppings = [];  // define selectedToppings array
    let toppingArray = document.getElementsByClassName("toppings"); // define and assign all "toppings" class elements to toppingArray
    
    for (let i = 0; i < toppingArray.length; i++) {
        if (toppingArray[i].checked) {
            selectedToppings.push(toppingArray[i].value);
            textTopping = textTopping + toppingArray[i].value + "<br>";
            toppingArray[i].checked = false;
        }
    }
    // every topping +£1.00, first 3 free of charge
    let toppingCount = selectedToppings.length;
    if (toppingCount > 3) {
        toppingTotal = (toppingCount - 3);
    } else {
        toppingTotal = 0;
    }


    if (textSize && textTopping && counter < 3) {
        subTotal = (sizePrice + toppingTotal);
        runningTotal += (sizePrice + toppingTotal);

        textFinal[counter] = textSize + textTopping + "£" + toppingTotal + ".00<br>" + "<strong>Subtotal: £" + subTotal + ".00</strong><br>";


        document.getElementById(`col${counter}`).innerHTML = textFinal[counter];
        document.getElementById(`col-container${counter}`).hidden = false;

        counter++;
    } else if (textSize && textTopping && counter > 2) {
        alert("You can't order more than 3 pizzas in one go!");
        textTopping = textSize = "";
    }

    selectedSize = ""; //reset selected size

}



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    document.getElementById("total").innerHTML = `<h3><strong>Total: £${runningTotal}.00</strong></h3>`;
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

