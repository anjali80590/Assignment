
class Device {
  getInfo() {
    throw new Error("Method 'getInfo()' must be implemented");
  }
}


class AppleLaptop extends Device {
  getInfo() {
    return "Apple MacBook Pro - M3 Chip, 16GB RAM, 512GB SSD";
  }
}

class ApplePhone extends Device {
  getInfo() {
    return 'Apple iPhone 15 Pro - A17 Pro, 6.1" Super Retina XDR, Titanium';
  }
}

class SamsungLaptop extends Device {
  getInfo() {
    return "Samsung Galaxy Book3 - Intel Core i7, 16GB RAM, 1TB SSD";
  }
}

class SamsungPhone extends Device {
  getInfo() {
    return 'Samsung Galaxy S24 Ultra - Snapdragon 8 Gen 3, 6.8" Dynamic AMOLED, S Pen';
  }
}


class DeviceFactory {
  createDevice(type) {
    throw new Error("Method 'createDevice()' must be implemented");
  }
}


class AppleFactory extends DeviceFactory {
  createDevice(type) {
    switch (type.toLowerCase()) {
      case "laptop":
        return new AppleLaptop();
      case "phone":
        return new ApplePhone();
      default:
        throw new Error(`Unknown device type: ${type}`);
    }
  }
}

class SamsungFactory extends DeviceFactory {
  createDevice(type) {
    switch (type.toLowerCase()) {
      case "laptop":
        return new SamsungLaptop();
      case "phone":
        return new SamsungPhone();
      default:
        throw new Error(`Unknown device type: ${type}`);
    }
  }
}


function main() {

  const appleFactory = new AppleFactory();
  const samsungFactory = new SamsungFactory();


  const appleLaptop = appleFactory.createDevice("laptop");
  console.log("Apple Laptop:");
  console.log(appleLaptop.getInfo());


  const samsungPhone = samsungFactory.createDevice("phone");
  console.log("\nSamsung Phone:");
  console.log(samsungPhone.getInfo());

  console.log("\nAdditional Devices:");

  const applePhone = appleFactory.createDevice("phone");
  console.log("Apple Phone:", applePhone.getInfo());

  const samsungLaptop = samsungFactory.createDevice("laptop");
  console.log("Samsung Laptop:", samsungLaptop.getInfo());
}

main();
