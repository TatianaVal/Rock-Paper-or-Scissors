const rock = 1;
const paper = 2;
const scissors = 3;

const options = {
    "1" : "✊",
    "2" : "🖐️",
    "3" : "✌"
}

function playGame(option) {
    let userChoice = option; 
    const ramdonNumber = Math.floor(Math.random() * ((3 + 1) - 1) + 1);

    let userIcon = options[userChoice];
    let computerIcon = options[ramdonNumber];

    if(ramdonNumber == paper &&  userChoice == scissors){
        message = "You Win!";
    } else if (ramdonNumber == scissors &&  userChoice == rock) {
        message = "You Win!";
    } else if (ramdonNumber == rock &&  userChoice == paper) {
        message = "You Win!";
    } else if (ramdonNumber == userChoice) {
        message = "You Tied!";
    } else {
        message = "Computer Wins!";
    }

    let iconsUser = document.querySelector("#hand-user .icon")
    iconsUser.innerHTML = userIcon;

    let iconComputer = document.querySelector("#hand-computer .icon")
    iconComputer.innerHTML = computerIcon;

    let responseContainerHtml = document.querySelector("#result");
    responseContainerHtml.innerHTML = message;

}
