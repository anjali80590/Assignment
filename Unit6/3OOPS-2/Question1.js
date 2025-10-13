console.log("=== Q1: Basic Inheritance ===");

class Duck {
  swim() {
    console.log("I know swimming");
  }
}

class MallardDuck extends Duck {}

const mallardDuck = new MallardDuck();
mallardDuck.swim();

console.log("\n=== Q2: Method Overriding ===");

class Bird {
  fly() {
    console.log("I can fly");
  }
}

class Penguin extends Bird {
  fly() {
    console.log("I cannot fly");
  }
}

const bird = new Bird();
const penguin = new Penguin();
bird.fly();
penguin.fly();

console.log("\n=== Q3: Interface Implementation ===");

class IDuck {
  swim() {
    throw new Error("Method 'swim()' must be implemented.");
  }

  fly() {
    throw new Error("Method 'fly()' must be implemented.");
  }

  sound() {
    throw new Error("Method 'sound()' must be implemented.");
  }
}

class ToyDuck extends IDuck {
  swim() {
    console.log("Can float on water");
  }

  fly() {
    console.log("Cannot fly");
  }

  sound() {
    console.log("Cannot sound");
  }
}

const toyDuck = new ToyDuck();
toyDuck.fly();
toyDuck.sound();
toyDuck.swim();
