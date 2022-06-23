function perform_computation() {
    // using confirm to check if the user really wants to carry out with the computation or not.
    var response = confirm(
        "This program performs a Basic Arithemetic computation \nDo you want to carry on? click OK for yes."
    );

    // if the user selected OK as response, then start our computation.
    if (response === true) {
        start_computation();
    } else {
        alert("Thank you for your time!");
    }
}

function start_computation() {
    // ask the user for the operat
    let userResponse = prompt(
        "We are basically performing computation for two number\n" +
        " Enter + for Addition\n Enter - for Substraction\n" +
        " Enter * for Multiplication\n Enter / for Division\n\n" +
        " Enter your option:"
    );

    // get the first and second number from the user;
    let firstNumber = prompt("Enter your First Number");
    let secondNumber = prompt("Enter your second Number");

    // check if the both input are Numbers, if not, keep asking until the user enters a number.
    // also check if both input are not empty
    while (
        isNaN(firstNumber) ||
        isNaN(secondNumber) ||
        firstNumber.trim() === "" ||
        secondNumber.trim() === ""
    ) {
        // if the firstNumber is not actually a Number or empty
        if (isNaN(firstNumber) || firstNumber.trim() === "") {
            firstNumber = prompt(
                "Opps! first Number must be a Number and not empty. Enter your First Number"
            );
        }
        // if the second Number is not actually a Number or empty
        else if (isNaN(secondNumber) || secondNumber.trim() === "") {
            secondNumber = prompt(
                "Opps! second Number must be a Number and not empty. Enter your Second Number"
            );
        }
        // otherwise just break;
        // although if both numbers are real numbers, it is expected to break on it's own.
        else {
            break;
        }
    }
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    switch (userResponse) {
        case "+":
            alert("The result is " + (firstNumber + secondNumber));
            break;
        case "-":
            alert("The result is " + (firstNumber - secondNumber));
            break;
        case "/":
            if (secondNumber === 0) {
                alert("The result is undefined");
            } else {
                alert("The result is " + firstNumber / secondNumber);
            }
            break;
        case "*":
            alert("The result is " + firstNumber * secondNumber);
            break;
        default:
            alert(
                "oops, we noticed you've entered an invalid operation, try to repeat over again! Thank you!"
            );
    }
}

// start
window.onload = perform_computation;
