console.log("=== Q4: Polymorphism – Duck Family ===");

class PolyDuck {
  fly() {
    console.log("Duck flies");
  }
}

class DesiDuck extends PolyDuck {
  fly() {
    console.log("DesiDuck flies at 10kmph");
  }
}

class VidesiDuck extends PolyDuck {
  fly() {
    console.log("VidesiDuck flies at 20kmph");
  }
}

class SmartDuck extends PolyDuck {
  fly() {
    console.log("SmartDuck flies at 50kmph");
  }
}

function makeDuckFly(duck) {
  duck.fly();
}

const desiDuck = new DesiDuck();
const videsiDuck = new VidesiDuck();
const smartDuck = new SmartDuck();

makeDuckFly(desiDuck);
makeDuckFly(videsiDuck);
makeDuckFly(smartDuck);

console.log("\n=== Q5: Access Modifiers Exploration ===");

class User {
  #orgCode = "DuckCorp";

  constructor(name, role) {
    this.name = name;
    this._role = role;
  }

  introduce() {
    console.log(`I am ${this.name} from ${this.#orgCode}`);
  }

  getOrgCode() {
    return this.#orgCode;
  }
}

class Manager extends User {
  getRole() {
    console.log(this._role);
  }
}

const user = new User("Daffy", "Employee");
user.introduce();

const manager = new Manager("Bugs", "Manager");
manager.introduce();
manager.getRole();

console.log("Trying to access private orgCode directly would cause an error");
console.log("Using getter method:", manager.getOrgCode());
