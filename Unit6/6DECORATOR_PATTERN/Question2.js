class Beverage {
  getDescription() {}
  getCost() {}
}

class GreenTea extends Beverage {
  getDescription() {
    return "Green Tea";
  }
  getCost() {
    return 40;
  }
}

class Sugar extends Beverage {
  constructor(beverage) {
    super();
    this.beverage = beverage;
  }
  getDescription() {
    return this.beverage.getDescription() + " + Sugar";
  }
  getCost() {
    return this.beverage.getCost() + 10;
  }
}

const tea = new Sugar(new GreenTea());
console.log(tea.getDescription());
console.log(tea.getCost());
