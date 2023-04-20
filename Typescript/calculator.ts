class Calculator {
  add(num1: number, num2: number): number {
    return num1 + num2;
  }

  subtract(num1: number, num2: number): number {
    return num1 - num2;
  }

  multiply(num1: number, num2: number): number {
    return num1 * num2;
  }

  divide(num1: number, num2: number): number {
    return num1 / num2;
  }
}

const calculator = new Calculator();

const addButton = document.getElementById("add")!;
addButton.addEventListener("click", () => {
  const num1 = +(document.getElementById("input1") as HTMLInputElement).value;
  const num2 = +(document.getElementById("input2") as HTMLInputElement).value;
  const result = calculator.add(num1, num2);
  document.getElementById("result")!.textContent = result.toString();
});

const subtractButton = document.getElementById("subtract")!;
subtractButton.addEventListener("click", () => {
  const num1 = +(document.getElementById("input1") as HTMLInputElement).value;
  const num2 = +(document.getElementById("input2") as HTMLInputElement).value;
  const result = calculator.subtract(num1, num2);
  document.getElementById("result")!.textContent = result.toString();
});

const multiplyButton = document.getElementById("multiply")!;
multiplyButton.addEventListener("click", () => {
  const num1 = +(document.getElementById("input1") as HTMLInputElement).value;
  const num2 = +(document.getElementById("input2") as HTMLInputElement).value;
  const result = calculator.multiply(num1, num2);
  document.getElementById("result")!.textContent = result.toString();
});

const divideButton = document.getElementById("divide")!;
divideButton.addEventListener("click", () => {
  const num1 = +(document.getElementById("input1") as HTMLInputElement).value;
  const num2 = +(document.getElementById("input2") as HTMLInputElement).value;
  const result = calculator.divide(num1, num2);
  document.getElementById("result")!.textContent = result.toString();
});
