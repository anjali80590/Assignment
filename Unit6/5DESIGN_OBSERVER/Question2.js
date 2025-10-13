
class IVehicle {
  start() {}
}

class Car extends IVehicle {
  start() {
    console.log("Car is starting");
  }
}

class Bike extends IVehicle {
  start() {
    console.log("Bike is starting");
  }
}

class Driver {
  constructor(vehicle) {
    this.vehicle = vehicle;
  }

  drive() {
    this.vehicle.start();
    console.log("Driving...");
  }
}

const carDriver = new Driver(new Car());
carDriver.drive();

const bikeDriver = new Driver(new Bike());
bikeDriver.drive();
