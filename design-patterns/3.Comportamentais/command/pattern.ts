interface Command {
  execute: (value: number) => number;
  undo: (value: number) => number;
}

class Calculator {
  public value: number = 0;
  public history: Command[] = [];

  public executeCommand(command: Command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }

  public undo() {
    const command = this.history.pop();
    if (!command) return;
    this.value = command.undo(this.value);
  }
}

class AddCommand {
  constructor(public value: number) {}

  public execute(curr: number) {
    return curr + this.value;
  }

  public undo(curr: number) {
    return curr - this.value;
  }
}

class SubtractCommand {
  constructor(public value: number) {}

  public execute(curr: number) {
    return curr - this.value;
  }

  public undo(curr: number) {
    return curr + this.value;
  }
}

class MultiplyCommand {
  constructor(public value: number) {}

  public execute(curr: number) {
    return curr * this.value;
  }

  public undo(curr: number) {
    return curr / this.value;
  }
}

class DivideCommand {
  constructor(public value: number) {}

  public execute(curr: number) {
    return curr / this.value;
  }

  public undo(curr: number) {
    return curr * this.value;
  }
}

// Combinação de comandos
class AddThenMultiplyCommand {
  private addCommand: Command;
  private multiplyCommand: Command;

  constructor(add: number, multiply: number) {
    this.addCommand = new AddCommand(add);
    this.multiplyCommand = new MultiplyCommand(multiply);
  }

  public execute(current: number) {
    const newValue = this.addCommand.execute(current);
    return this.multiplyCommand.execute(newValue);
  }

  public undo(current: number) {
    const newValue = this.multiplyCommand.undo(current);
    return this.addCommand.undo(newValue);
  }
}

console.clear();

// const addCommand = new AddCommand(10);
// const newValue = addCommand.execute(10);

// console.log(newValue);
// console.log(addCommand.undo(newValue));

const calculator = new Calculator();
calculator.executeCommand(new AddCommand(10));
console.log(calculator.value);
calculator.executeCommand(new DivideCommand(2));
console.log(calculator.value);

console.log("----");

const calculator2 = new Calculator();
calculator2.executeCommand(new AddThenMultiplyCommand(10, 2));
console.log(calculator2.value);
calculator2.undo();
console.log(calculator2.value);
