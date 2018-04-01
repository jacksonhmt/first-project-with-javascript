var messageOfValidation = "Type only numbers";
var messageOfValidationToFieldSelect = "Select the Operator"
var firstNumber;
var secondNumber;
var operator;

// FUNCTION READ FIELD
function ReadField() {
    this.firstNumber = document.getElementById("firstNumber").value;
    this.secondNumber = document.getElementById("secondNumber").value;
    this.operator = document.getElementById("selectOperator").value;
}

// FUNCTION OF VALIDATION
function validator() {
    ReadField();

    validateFieldNumber("messageOfValidationToFirstNumber", firstNumber);
    validateFieldNumber("messageOfValidationToSecondNumber", secondNumber);
    validateFieldOperate("messageOfValidationToOperation", operator);
}

// FUNCTION OF VALIDATION TO FIRST NUMBER
function validateFieldNumber(id, number) {
    if (isNaN(number)) {
        document.getElementById(id).innerHTML = messageOfValidation;
    } else {
        document.getElementById(id).innerHTML = "";
    }
}

// FUNCTION OF VALIDATION TO FIELD SELECT
function validateFieldOperate(id, operator) {
    if (operator == "Select the Operator") {
        document.getElementById(id).innerHTML = messageOfValidationToFieldSelect;
    } else {
        document.getElementById(id).innerHTML = "";
    }
}

// FUNCTION CALCULATE
function calculate() {
    var result;
    ReadField();

    switch (operator) {
        case '+':
            result = parseInt(firstNumber) + parseInt(secondNumber);
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
        default:
            document.getElementById("result").innerHTML = "Não encontrou a operação";
    }
    if (operator == "Select the Operator") {
        document.getElementById("result").innerHTML = "Operator not Found";
    } else {
        document.getElementById("result").innerHTML = firstNumber + " " 
        + operator + " "  + secondNumber + " " + "=" + " " + result;
    }
}