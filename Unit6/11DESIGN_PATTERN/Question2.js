class GameCharacter {
  constructor(name, level, weapon) {
    this.name = name;
    this.level = level;
    this.weapon = weapon;
  }

  clone() {
    return new GameCharacter(this.name, this.level, this.weapon);
  }

  getDetails() {
    return `Character: ${this.name}, Level: ${this.level}, Weapon: ${this.weapon}`;
  }
}


function main() {
  const warrior = new GameCharacter("Warrior", 10, "sword");
  console.log("Original Character:");
  console.log(warrior.getDetails());

  const clonedWarrior = warrior.clone();
  console.log("\nCloned Character:");
  console.log(clonedWarrior.getDetails());
  console.log("\nAre they the same object?", warrior === clonedWarrior);
  console.log(
    "Are they equal?",
    JSON.stringify(warrior) === JSON.stringify(clonedWarrior)
  );
}

main();
