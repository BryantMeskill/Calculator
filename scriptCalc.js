const numButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equal");
const screen = document.querySelector(".calc-screen");
const backButton = document.querySelector(".backspace");

let storedValue = "";
let currentValue = "";
let previousOperator;
let currentOperator;

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
      return addition(numberA, numberB);

    case "-":
      return subtraction(numberA, numberB);

    case "*":
      return multiplication(numberA, numberB);

    case "/":
      return division(numberA, numberB);
  }
}

numButtons.forEach((number) => {
  number.addEventListener("click", function () {
    currentValue += number.textContent;
    screen.textContent = currentValue;
  });
});

operatorButtons.forEach((operator) => {
  operator.addEventListener("click", function () {
    storedValue = currentValue;
    currentOperator = operator.textContent;
    screen.textContent = currentOperator;
    currentValue = "";
  });
});

equalButton.addEventListener("click", function () {
  let answer = operate(
    parseInt(storedValue),
    parseInt(currentValue),
    currentOperator
  );

  if (isNaN(answer) || answer === undefined) {
    answer = "0";
    storedValue = "";
    currentValue = "";
    currentOperator = "";
    screen.textContent = "0";
    return;
  }

  screen.textContent = answer;
  currentValue = answer;
});

clearButton.addEventListener("click", function () {
  storedValue = "";
  currentValue = "";
  currentOperator = "";
  screen.textContent = "0";
});

backButton.addEventListener("click", function () {});
