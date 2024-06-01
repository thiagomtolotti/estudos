class Calculator {
  public value: number = 0;

  public add(value: number) {
    this.value += value;
  }

  public subtract(value: number) {
    this.value -= value;
  }

  public multiply(value: number) {
    this.value *= value;
  }

  public divide(value: number) {
    this.value /= value;
  }
}

console.clear();

const calculator = new Calculator();
calculator.add(10);
console.log(calculator.value);
calculator.divide(2);
console.log(calculator.value);
