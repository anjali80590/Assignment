class PetrolEngine {
  start() {
    console.log("Petrol engine started");
  }
}

class Car {
  constructor() {
    this.engine = new PetrolEngine();
  }

  drive() {
    this.engine.start();
    console.log("Driving car");
  }
}

const car = new Car();
car.drive();
