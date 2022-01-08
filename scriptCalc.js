const numButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equal");
const screen = document.querySelector(".calc-screen");

let storedValue = "";
let currentValue;
let previousOperator;

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function operate(numberA, numberB, operator) {
  switch (operator) {
    case "+":
      addition(numberA, numberB);

    case "-":
      subtraction(numberA, numberB);

    case "*":
      multiplication(numberA, numberB);

    case "/":
      division(numberA, numberB);

      break;
  }
}

numButtons.forEach((number) => {
  number.addEventListener("click", function () {
    storedValue += number.textContent;
    screen.textContent = storedValue;
  });
});

operatorButtons.forEach((operator) => {
  operator.addEventListener("click", function () {
    storedValue = screen.textContent;
    previousOperator = operator.textContent;
    screen.textContent = 0;
  });
});

equalButton.addEventListener("click", function () {});
