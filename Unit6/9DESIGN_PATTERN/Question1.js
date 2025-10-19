class VendingMachineState {
  insertCoin(machine) {}
  makeSelection(machine) {}
  dispense(machine) {}
}

class IdleState extends VendingMachineState {
  insertCoin(machine) {
    console.log("Coin inserted. Moving to Processing state.");
    machine.setState(new ProcessingState());
  }

  makeSelection(machine) {
    console.log("Please insert coin first.");
  }

  dispense(machine) {
    console.log("Please insert coin and make selection first.");
  }
}

class ProcessingState extends VendingMachineState {
  insertCoin(machine) {
    console.log("Coin already inserted. Please make selection.");
  }

  makeSelection(machine) {
    console.log("Selection made. Moving to Dispensing state.");
    machine.setState(new DispensingState());
  }

  dispense(machine) {
    console.log("Please make selection first.");
  }
}

class DispensingState extends VendingMachineState {
  insertCoin(machine) {
    console.log("Currently dispensing. Please wait.");
  }

  makeSelection(machine) {
    console.log("Currently dispensing. Please wait.");
  }

  dispense(machine) {
    console.log("Item dispensed. Returning to Idle state.");
    machine.setState(new IdleState());
  }
}

class VendingMachine {
  constructor() {
    this.currentState = new IdleState();
  }

  setState(state) {
    this.currentState = state;
  }

  insertCoin() {
    this.currentState.insertCoin(this);
  }

  makeSelection() {
    this.currentState.makeSelection(this);
  }

  dispense() {
    this.currentState.dispense(this);
  }
}
