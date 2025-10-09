console.log("=== Open/Closed Principle Refactoring ===");

class Shipping {
  calculate(shippingType) {
    return shippingType.calculateCost();
  }
}

class StandardShipping {
  calculateCost() {
    return 50;
  }
}

class ExpressShipping {
  calculateCost() {
    return 100;
  }
}

class OvernightShipping {
  calculateCost() {
    return 200;
  }
}

class FreeShipping {
  calculateCost() {
    return 0;
  }
}

// Usage
const shipping = new Shipping();

console.log("Standard shipping:", shipping.calculate(new StandardShipping()));
console.log("Express shipping:", shipping.calculate(new ExpressShipping()));
console.log("Overnight shipping:", shipping.calculate(new OvernightShipping()));
console.log("Free shipping:", shipping.calculate(new FreeShipping()));

console.log(
  "\n=== Adding New Shipping Type Without Modifying Shipping Class ==="
);

class InternationalShipping {
  calculateCost() {
    return 300;
  }
}

class BulkShipping {
  calculateCost() {
    return 75;
  }
}

console.log(
  "International shipping:",
  shipping.calculate(new InternationalShipping())
);
console.log("Bulk shipping:", shipping.calculate(new BulkShipping()));

console.log("\n=== Advanced Example with Additional Properties ===");

class WeightBasedShipping {
  constructor(weight) {
    this.weight = weight;
  }

  calculateCost() {
    return this.weight * 2;
  }
}

class DistanceBasedShipping {
  constructor(distance) {
    this.distance = distance;
  }

  calculateCost() {
    return this.distance * 0.5;
  }
}

console.log(
  "Weight-based shipping (10kg):",
  shipping.calculate(new WeightBasedShipping(10))
);
console.log(
  "Distance-based shipping (100km):",
  shipping.calculate(new DistanceBasedShipping(100))
);
