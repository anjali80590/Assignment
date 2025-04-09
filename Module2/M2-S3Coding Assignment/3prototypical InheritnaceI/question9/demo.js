import { Person, Employee } from "./person.js";

const person1 = new Person("John Doe", 30);
const employee1 = new Employee("Jane Smith", 28, "Software Developer");

person1.introduce();
employee1.introduce();
employee1.work();
