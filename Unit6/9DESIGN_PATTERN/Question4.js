class ATMState {
  insertCard(atm) {}
  enterPin(atm) {}
  withdrawCash(atm) {}
  dispenseCash(atm) {}
  ejectCard(atm) {}
}

class IdleState extends ATMState {
  insertCard(atm) {
    console.log("Card inserted. Please enter PIN.");
    atm.setState(new CardInsertedState());
  }

  enterPin(atm) {
    console.log("Please insert card first.");
  }

  withdrawCash(atm) {
    console.log("Please insert card and enter PIN first.");
  }

  dispenseCash(atm) {
    console.log("Please complete transaction steps first.");
  }

  ejectCard(atm) {
    console.log("No card to eject.");
  }
}

class CardInsertedState extends ATMState {
  insertCard(atm) {
    console.log("Card already inserted.");
  }

  enterPin(atm) {
    console.log("PIN verified. You can now withdraw cash.");
    atm.setState(new AuthenticatedState());
  }

  withdrawCash(atm) {
    console.log("Please enter PIN first.");
  }

  dispenseCash(atm) {
    console.log("Please enter PIN and request withdrawal first.");
  }

  ejectCard(atm) {
    console.log("Card ejected. Returning to Idle state.");
    atm.setState(new IdleState());
  }
}

class AuthenticatedState extends ATMState {
  insertCard(atm) {
    console.log("Card already inserted.");
  }

  enterPin(atm) {
    console.log("PIN already verified.");
  }

  withdrawCash(atm) {
    console.log("Withdrawal request accepted. Dispensing cash.");
    atm.setState(new DispensingCashState());
  }

  dispenseCash(atm) {
    console.log("Please request withdrawal first.");
  }

  ejectCard(atm) {
    console.log("Card ejected. Returning to Idle state.");
    atm.setState(new IdleState());
  }
}

class DispensingCashState extends ATMState {
  insertCard(atm) {
    console.log("Transaction in progress.");
  }

  enterPin(atm) {
    console.log("Transaction in progress.");
  }

  withdrawCash(atm) {
    console.log("Already dispensing cash.");
  }

  dispenseCash(atm) {
    console.log("Cash dispensed. Ejecting card and returning to Idle state.");
    atm.setState(new IdleState());
  }

  ejectCard(atm) {
    console.log("Please wait for transaction to complete.");
  }
}

class ATM {
  constructor() {
    this.currentState = new IdleState();
  }

  setState(state) {
    this.currentState = state;
  }

  insertCard() {
    this.currentState.insertCard(this);
  }

  enterPin() {
    this.currentState.enterPin(this);
  }

  withdrawCash() {
    this.currentState.withdrawCash(this);
  }

  dispenseCash() {
    this.currentState.dispenseCash(this);
  }

  ejectCard() {
    this.currentState.ejectCard(this);
  }
}
