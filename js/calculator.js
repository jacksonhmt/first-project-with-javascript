var messageOfValidation = "Type only numbers";


// FUNCTION OF VALIDATION
function validator() {
    var firstNumber;
    var secondNumber;

    firstNumber = document.getElementById("firstNumber").value;
    secondNumber = document.getElementById("secondNumber").value;

    validateFirstNumber(firstNumber);
    validadeSecondNumber(secondNumber);
}

// FUNCTION OF VALIDATION TO FIRST NUMBER
function validateFirstNumber(number) {
    if (isNaN(number)) {
        document.getElementById("messageOfValidationToFirstNumber").innerHTML = messageOfValidation;
    } else {
        document.getElementById("messageOfValidationToFirstNumber").innerHTML = "";
    }
}

// FUNCTION OF VALIDATION TO SECOND NUMBER
function validadeSecondNumber(number) {
    if (isNaN(number)) {
        document.getElementById("messageOfValidationToSecondNumber").innerHTML = messageOfValidation;
    } else {
        document.getElementById("messageOfValidationToSecondNumber").innerHTML = "";
    }
}

// FUNCTION CALCULATE
function calculate() {
    var result;
    var operator;
    var firstNumber;
    var secondNumber;

    firstNumber = document.getElementById("firstNumber").value;
    secondNumber = document.getElementById("secondNumber").value;
    operator = document.getElementById("selectOperator").value;

    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case "Select the Operator":
            document.getElementById("result").innerHTML = "Não encontrou a operação";
            break;
    }
    document.getElementById("result").innerHTML = firstNumber + operator + secondNumber + "=" + result;
}
