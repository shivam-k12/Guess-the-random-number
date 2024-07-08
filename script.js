let random = Math.floor(Math.random() * 100) + 1;
let inputBox = document.querySelector("#inputbox");
let submit = document.querySelector("#submit");
let result = document.querySelector(".result");
let reset = document.querySelector("#reset");

submit.addEventListener("click", () => {
    let guess = parseInt(inputBox.value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        result.innerText = "Please enter a valid number between 1 and 100.";
    } else if (guess === random) {
        result.innerText = `Congratulations! You guessed the right number. The random number was ${random}.`;
    } else if (guess < random) {
        inputBox.value = "";
        result.innerText = "Your guess was too small. Please try again.";
    } else {
        inputBox.value = "";
        result.innerText = "Your guess was too large. Please try again.";
    }
});

reset.addEventListener("click", () => {
    random = Math.floor(Math.random() * 100) + 1;
    inputBox.value = "";
    result.innerText = "Enter a number to get Hints!";
});





        
