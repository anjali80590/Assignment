import { Car } from "./cars.js";

export function performMaintenance(car, delayMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      car.isAvailable = true;
      console.log(`Maintenance completed on ${car.make} ${car.model}`);
      resolve();
    }, delayMs);
  });
}

export function createSUV(make, model, year) {
  const car = new Car(make, model, year);
  car.type = "suv";
  return car;
}

export function createLuxuryCar(make, model, year) {
  const car = new Car(make, model, year);
  car.type = "luxury";
  return car;
}
