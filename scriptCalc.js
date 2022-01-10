const numButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equal");
const screen = document.querySelector(".calc-screen");

let storedValue = "";
let currentValue = "";
let currentOperator = "";

const addition = (a, b) => {
  return a + b;
};

const subtraction = (a, b) => {
  return a - b;
};

const multiplication = (a, b) => {
  return a * b;
};

const division = (a, b) => {
  return a / b;
};

const clearData = () => {
  answer = "0";
  storedValue = "";
  currentValue = "";
  currentOperator = "";
  screen.textContent = "0";
  return;
};

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
  number.addEventListener("click", () => {
    currentValue += number.textContent;
    screen.textContent = currentValue;
  });
});

operatorButtons.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (currentOperator != "") {
      let answer = operate(
        parseInt(storedValue),
        parseInt(currentValue),
        currentOperator
      );
      if (isNaN(answer) || answer === undefined) {
        clearData();
        return;
      }

      if (!isFinite(answer)) {
        clearData();
        return;
      }

      if (!Number.isInteger(answer)) {
        screen.textContent = answer.toFixed(2);
        currentOperator = operator.textContent;
        currentValue = answer.toFixed(2);
        storedValue = currentValue;
        currentValue = "";
        return;
      }
      currentOperator = operator.textContent;
      currentValue = answer;
      screen.textContent = currentValue;
      storedValue = currentValue;
      currentValue = "";
      return;
    }
    storedValue = currentValue;
    currentOperator = operator.textContent;
    screen.textContent = currentOperator;
    currentValue = "";
  });
});

equalButton.addEventListener("click", () => {
  let answer = operate(
    parseInt(storedValue),
    parseInt(currentValue),
    currentOperator
  );

  if (isNaN(answer) || answer === undefined) {
    clearData();
    return;
  }

  if (!isFinite(answer)) {
    clearData();
    return;
  }

  if (!Number.isInteger(answer)) {
    screen.textContent = answer.toFixed(2);
    currentValue = answer.toFixed(2);
    currentOperator = "";
    return;
  }

  screen.textContent = answer;
  currentValue = answer;
  currentOperator = "";
});

clearButton.addEventListener("click", () => {
  clearData();
});
