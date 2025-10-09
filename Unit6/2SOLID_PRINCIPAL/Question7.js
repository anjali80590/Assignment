
console.log("=== Q7: Runtime Polymorphism ===");

class Animal {
  makeSound() {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Bark!");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow!");
  }
}

class Cow extends Animal {
  makeSound() {
    console.log("Moo!");
  }
}

function makeAnimalSound(animal) {
  animal.makeSound();
}

const animals = [new Animal(), new Dog(), new Cat(), new Cow()];

animals.forEach((animal) => {
  makeAnimalSound(animal);
});
