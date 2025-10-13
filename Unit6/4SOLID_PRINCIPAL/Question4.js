console.log("=== Interface Segregation Principle Refactoring ===");

// Violation: Single interface forcing all devices to implement all methods
console.log("--- Original Violating Design ---");

class OldPrinter {
  print() {
    console.log("Printing document...");
  }

  scan() {
    throw new Error("Old printer cannot scan!");
  }

  fax() {
    throw new Error("Old printer cannot fax!");
  }
}

class SmartPrinter {
  print() {
    console.log("Printing high quality document...");
  }

  scan() {
    console.log("Scanning document...");
  }

  fax() {
    console.log("Sending fax...");
  }
}

// This violates ISP because OldPrinter is forced to implement unused methods
try {
  const oldPrinter = new OldPrinter();
  oldPrinter.print();
  oldPrinter.scan(); // This will throw error!
} catch (error) {
  console.log("ISP Violation:", error.message);
}

console.log("\n--- Fixed Design with Segregated Interfaces ---");

// Segregated interfaces
class Printable {
  print() {
    throw new Error("Method 'print()' must be implemented");
  }
}

class Scannable {
  scan() {
    throw new Error("Method 'scan()' must be implemented");
  }
}

class Faxable {
  fax() {
    throw new Error("Method 'fax()' must be implemented");
  }
}

// Devices only implement interfaces they need
class OldPrinter extends Printable {
  print() {
    console.log("Printing document on old printer...");
  }
}

class SmartPrinter extends Printable {
  print() {
    console.log("Printing high quality document...");
  }
}

// Mixin pattern to combine capabilities
Object.assign(SmartPrinter.prototype, Scannable.prototype, Faxable.prototype);

SmartPrinter.prototype.scan = function () {
  console.log("Scanning document with high resolution...");
};

SmartPrinter.prototype.fax = function () {
  console.log("Sending digital fax...");
};

class ScannerOnly extends Scannable {
  scan() {
    console.log("Scanning document...");
  }
}

class AllInOneDevice extends Printable {
  print() {
    console.log("Printing...");
  }
}

Object.assign(AllInOneDevice.prototype, Scannable.prototype, Faxable.prototype);

AllInOneDevice.prototype.scan = function () {
  console.log("Scanning...");
};

AllInOneDevice.prototype.fax = function () {
  console.log("Faxing...");
};

console.log("Testing ISP-compliant design:");

const oldPrinter = new OldPrinter();
oldPrinter.print();

const smartPrinter = new SmartPrinter();
smartPrinter.print();
smartPrinter.scan();
smartPrinter.fax();

const scanner = new ScannerOnly();
scanner.scan();

console.log("\n--- Alternative Composition Approach ---");

// Using composition instead of inheritance
class Printer {
  print() {
    console.log("Printing...");
  }
}

class Scanner {
  scan() {
    console.log("Scanning...");
  }
}

class FaxMachine {
  fax() {
    console.log("Faxing...");
  }
}

class BasicPrinter {
  constructor() {
    this.printer = new Printer();
  }

  print() {
    this.printer.print();
  }
}

class MultiFunctionPrinter {
  constructor() {
    this.printer = new Printer();
    this.scanner = new Scanner();
    this.faxMachine = new FaxMachine();
  }

  print() {
    this.printer.print();
  }

  scan() {
    this.scanner.scan();
  }

  fax() {
    this.faxMachine.fax();
  }
}

console.log("Testing composition approach:");

const basic = new BasicPrinter();
basic.print();

const multi = new MultiFunctionPrinter();
multi.print();
multi.scan();
multi.fax();
