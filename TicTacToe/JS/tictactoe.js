let activePlayer = "X";     //keep track of who's turn it is.
let selectedSquares = [];   //This array stores an array of moves. We use this to determine win conditions.


//function to get a random integer from interval
function randomIntInterval(min, max) {  //min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let random; //defining globas variable random 

//Function for placing an X or O in a square
function placeXOrO(squareNumber) {
    //This condition ensures a square hasn't be selected already.
    //The .some() method is used to check each element of selectedSquare array to
    //see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);  //variable retrieves the html element id that was clicked
        if (activePlayer === "X") {     //This condition checks who's turn it is.
            select.style.backgroundImage = 'url("./img/x.png")';    // if true, change background of selected element to x.png
        } else {
            select.style.backgroundImage = 'url("./img/o.png")';    // if false change background of selected element to o.png
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        checkwinConditions();   //check if win conditions are met
        if (activePlayer === "X") {     //condition to change the active player 
            activePlayer = "O";         //if activer player is "X", change it to "O"
        } else {
            activePlayer = "X";         //if activer player is "O", change it to "X"
        }

        audio("./media/place.mp3");      //play placament sound
        if (activePlayer === "O") {     //condition to check if it's computers turn.
            random = randomIntInterval(1000, 3000); //getting random number between 1000-3000
            disableClick()              //this function disables clicking for computer choice
            //waiting 1-3 seconds before placing the image and enabling click.
            setTimeout(function () { computersTurn(); }, random)
        }
        return true;    //returning true is needed for our computersTurn() function to work.
    }

    //This function results in a random square being selected
    function computersTurn() {
        let success = false;    //this var needed for our while loop
        let pickASquare;        //this var stores a random number 0-8

        //this loop allow keep trying if a square is selected already
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9));    // random 0-8 number is selected
            if (placeXOrO(pickASquare)) {   //if the random number evaluates returns true, the square hasn't been selected yet
                placeXOrO(pickASquare);     //call the function
                success = true;             //change the var and end the loop
            }
        }
    }

    //this function checks for win conditions and draw a line if condition is met
    function checkwinConditions() {
        if (arrayIncludes("0X", "1X", "2X")) { drawWinLine(50, 100, 558, 100); }
        else if (arrayIncludes("3X", "4X", "5X")) { drawWinLine(50, 304, 558, 304); }
        else if (arrayIncludes("6X", "7X", "8X")) { drawWinLine(50, 508, 558, 508); }
        else if (arrayIncludes("0X", "3X", "6X")) { drawWinLine(100, 50, 100, 558); }
        else if (arrayIncludes("1X", "4X", "7X")) { drawWinLine(304, 50, 304, 558); }
        else if (arrayIncludes("2X", "5X", "8X")) { drawWinLine(508, 50, 508, 558); }
        else if (arrayIncludes("6X", "4X", "2X")) { drawWinLine(100, 508, 510, 90); }
        else if (arrayIncludes("0X", "4X", "8X")) { drawWinLine(100, 100, 520, 520); }

        else if (arrayIncludes("0O", "1O", "2O")) { drawWinLine(50, 100, 558, 100); }
        else if (arrayIncludes("3O", "4O", "5O")) { drawWinLine(50, 304, 558, 304); }
        else if (arrayIncludes("6O", "7O", "8O")) { drawWinLine(50, 508, 558, 508); }
        else if (arrayIncludes("0O", "3O", "6O")) { drawWinLine(100, 50, 100, 558); }
        else if (arrayIncludes("1O", "4O", "7O")) { drawWinLine(304, 50, 304, 558); }
        else if (arrayIncludes("2O", "5O", "8O")) { drawWinLine(508, 50, 508, 558); }
        else if (arrayIncludes("6O", "4O", "2O")) { drawWinLine(100, 508, 510, 90); }
        else if (arrayIncludes("0O", "4O", "8O")) { drawWinLine(100, 100, 520, 520); }

        else if (selectedSquares.length >= 9) {
            audio("./media/tie.mp3");
            setTimeout(function () { resetGame();}, 1500);
        }
    }
}

//check if an array includes 3 strings, if yes, it returns true and execute drawWinLine function
function arrayIncludes(squareA, squareB, squareC) {
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);

    if (a === true && b === true && c === true) { return true; }
}

//this function makes our body element temporarily unclickable
function disableClick() {
    body.style.pointerEvents = "none";
    setTimeout(function () { body.style.pointerEvents = "auto"; }, random + 300);
}

function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}


//This function utilizes html canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //This line accesees our html canvas element
    const canvas = document.getElementById("win-lines");
    //this line gives us access to methods and properties to use on canvas.
    const c = canvas.getContext("2d");
    let x1 = coordX1, //start X axis
        y1 = coordY1, //start Y axis
        x2 = coordX2, //end X axis
        y2 = coordY2, //end Y axis
        x = x1, //variable to store x axis data fo animation loop
        y = y1 //variable to store y axis data fo animation loop

    //this function interacts with the canvas
    function animateLineDrawing() {
        //this variable creates the loop for when the game ends it restarts.
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608); //clear content from last loop iteration
        c.beginPath();      //start a new path
        c.moveTo(x1, y1);   //move to starting point for our line
        c.lineTo(x, y)      //indicate the end point in our line
        c.lineWidth = 10;   //set width of our line
        c.strokeStyle = 'rgba(70, 255, 33, .8)';   //set the color of our line
        c.stroke();     //draws everything we laid out above

        //condition checks if we have reached the endpoint
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }    //add 10 to the previous end x point
            if (y < y2) { y += 10; }    //add 10 to the previous end y point
            //this condition cancels our animation loop if reach the end points
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //This coindition is similar to the one above
        //it was necessary for the 6, 4, 2 wind condition.
        if (x1 <= x2 && y1 >= y2) {
            if(x < x2) { x += 10; }  
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    //This function clears our canvas after our win line is drawn/
    function clear() {
        const animationLoop = requestAnimationFrame(clear); //start animation loop
        c.clearRect(0, 0, 608, 608);    //clear our canvas
        cancelAnimationFrame(animationLoop);   //stop our animation loop
    }

    disableClick(); //disable click while the win sound is playing
    audio("./media/winGame.mp3");   //play win sound
    animateLineDrawing();       //call main animation loop
    setTimeout(function () { clear(); resetGame(); }, 2000)
}

//reset the game
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = "";
    }
    selectedSquares = [];
}