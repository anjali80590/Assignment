class Pizza {
  constructor(size, cheese, pepperoni, mushrooms) {
    this.size = size;
    this.cheese = cheese;
    this.pepperoni = pepperoni;
    this.mushrooms = mushrooms;
  }

  getDetails() {
    return `Pizza Details:
Size: ${this.size}
Cheese: ${this.cheese}
Pepperoni: ${this.pepperoni}
Mushrooms: ${this.mushrooms}`;
  }
}

class PizzaBuilder {
  constructor() {
    this.size = "medium";
    this.cheese = false;
    this.pepperoni = false;
    this.mushrooms = false;
  }

  setSize(size) {
    this.size = size;
    return this;
  }

  addCheese() {
    this.cheese = true;
    return this;
  }

  addPepperoni() {
    this.pepperoni = true;
    return this;
  }

  addMushrooms() {
    this.mushrooms = true;
    return this;
  }

  build() {
    return new Pizza(this.size, this.cheese, this.pepperoni, this.mushrooms);
  }
}


function main() {
  const pizzaBuilder = new PizzaBuilder();
  const pizza = pizzaBuilder
    .setSize("large")
    .addCheese()
    .addMushrooms()
    .build();

  console.log(pizza.getDetails());
}

main();
