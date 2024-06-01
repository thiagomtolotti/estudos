class PumblingSystem {
  // Acesso de baixo nível ao sistema hidráulico
  setPressure(pressure: number) {}
  turnOn() {}
  turnOff() {}
}

class ElectricalSystem {
  // Acesso de baixo nível ao sistema elétrico
  setVoltage(voltage: number) {}
  turnOn() {}
  turnOff() {}
}

class House {
  private plumbing = new PumblingSystem();
  private electrical = new ElectricalSystem();

  public turnOnSystems() {
    this.electrical.setVoltage(110);
    this.electrical.turnOn();
    this.plumbing.setPressure(500);
    this.plumbing.turnOn();
  }

  public shutDown() {
    this.plumbing.turnOff();
    this.electrical.turnOff();
  }
}

const client = new House();
client.turnOnSystems();
client.shutDown();
