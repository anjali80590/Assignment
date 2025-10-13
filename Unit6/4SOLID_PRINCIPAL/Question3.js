console.log("=== Liskov Substitution Principle Fix ===");

// Violation: Ostrich cannot substitute Bird without breaking behavior
console.log("--- Original Violating Code ---");

class Bird {
  fly() {
    console.log("Flying...");
  }
}

class Ostrich extends Bird {
  fly() {
    throw new Error("Ostriches can't fly!");
  }
}

// This violates LSP because we can't substitute Ostrich for Bird
try {
  const birds = [new Bird(), new Ostrich()];
  birds.forEach((bird) => {
    try {
      bird.fly();
    } catch (error) {
      console.log("Error:", error.message);
    }
  });
} catch (error) {
  console.log("LSP Violation detected!");
}

console.log("\n--- Fixed Design ---");

class Bird {
  move() {
    console.log("Moving...");
  }
}

class FlyingBird extends Bird {
  fly() {
    console.log("Flying...");
  }
}

class Sparrow extends FlyingBird {
  move() {
    this.fly();
  }
}

class Ostrich extends Bird {
  run() {
    console.log("Running fast!");
  }

  move() {
    this.run();
  }
}

class Penguin extends Bird {
  swim() {
    console.log("Swimming gracefully");
  }

  move() {
    this.swim();
  }
}

// Now all birds can be substituted without breaking behavior
console.log("Testing fixed design:");
const birds = [new Sparrow(), new Ostrich(), new Penguin()];

birds.forEach((bird) => {
  bird.move();
});

console.log("\n--- Alternative Fix with Capabilities ---");

class Bird {
  constructor(name) {
    this.name = name;
  }

  move() {
    console.log(`${this.name} is moving`);
  }
}

const FlightCapability = {
  fly() {
    console.log(`${this.name} is flying`);
  },
};

const RunningCapability = {
  run() {
    console.log(`${this.name} is running fast`);
  },
};

const SwimmingCapability = {
  swim() {
    console.log(`${this.name} is swimming`);
  },
};

class Eagle extends Bird {
  constructor() {
    super("Eagle");
    Object.assign(this, FlightCapability);
  }

  move() {
    this.fly();
  }
}

class Roadrunner extends Bird {
  constructor() {
    super("Roadrunner");
    Object.assign(this, RunningCapability);
  }

  move() {
    this.run();
  }
}

class Duck extends Bird {
  constructor() {
    super("Duck");
    Object.assign(this, { ...FlightCapability, ...SwimmingCapability });
  }

  move() {
    this.swim();
  }

  takeOff() {
    this.fly();
  }
}

console.log("Testing capability-based design:");
const newBirds = [new Eagle(), new Roadrunner(), new Duck()];

newBirds.forEach((bird) => {
  bird.move();
});

// Duck can also fly when needed
console.log("\nDuck taking off:");
newBirds[2].takeOff();
