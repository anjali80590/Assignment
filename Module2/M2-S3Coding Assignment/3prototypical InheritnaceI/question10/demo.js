import { Car, Customer, PremiumCustomer } from "./cars.js";
import {
  performMaintenance,
  createSUV,
  createLuxuryCar,
} from "./rentalService.js";

const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = createSUV("Honda", "CR-V", 2021);
const car3 = createLuxuryCar("BMW", "7 Series", 2022);

const regular = new Customer("John Doe");
const premium = new PremiumCustomer("Jane Smith");

regular.rentCar(car1);
premium.rentCar(car2);
premium.rentCar(car3);

async function demoReturns() {
  await regular.returnCar(car1);
  console.log("Return processed");

  const returnForJane = premium.returnCar.bind(premium);
  await returnForJane(car2);
  console.log("Premium return processed");
}

demoReturns();

performMaintenance(car3, 3000).then(() => {
  console.log("Car ready for rental again");
});

function tryRent(customer, car) {
  Customer.prototype.rentCar.apply(customer, [car]);
}
tryRent(regular, car3);
