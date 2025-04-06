function Car(make, model, year, isAvailable = true) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isAvailable = isAvailable;
  this.type = "standard";
}

Car.prototype.basePrice = 50;

function Customer(name, rentedCars = []) {
  this.name = name;
  this.rentedCars = rentedCars;
}

Customer.prototype.rentCar = function (car) {
  if (!car.isAvailable) {
    console.log(`Sorry, ${car.make} ${car.model} is already rented.`);
    return false;
  }

  car.isAvailable = false;
  this.rentedCars.push(car);
  console.log(`${this.name} rented ${car.make} ${car.model}`);
  return true;
};

Customer.prototype.returnCar = function (car) {
  return new Promise((resolve) => {
    setTimeout(() => {
      car.isAvailable = true;
      this.rentedCars = this.rentedCars.filter((c) => c !== car);
      console.log(`${this.name} returned ${car.make} ${car.model}`);
      resolve();
    }, 2000);
  });
};

function PremiumCustomer(name, rentedCars = [], discountRate = 0.1) {
  Customer.call(this, name, rentedCars);
  this.discountRate = discountRate;
}

PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;

PremiumCustomer.prototype.rentCar = function (car) {
  if (Customer.prototype.rentCar.call(this, car)) {
    const price = this.calculatePrice(car);
    console.log(
      `Applied ${this.discountRate * 100}% discount. Total: $${price}`
    );
    return true;
  }
  return false;
};

PremiumCustomer.prototype.calculatePrice = function (car, days = 1) {
  let price = car.basePrice * days;

  switch (car.type) {
    case "suv":
      price *= 1.2;
      break;
    case "luxury":
      price *= 1.5;
      break;
  }

  return price * (1 - this.discountRate);
};

export { Car, Customer, PremiumCustomer };
