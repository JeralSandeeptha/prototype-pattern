import type { IPrototype } from "./IPrototype.js";
import { User } from "./User.js";

export class Admin extends User {
  constructor(
    public id: number,
    public name: string,
    public age: number,
    public email: string,
    public password: string,
  ) {
    super(name, age);
  }
  clone(): IPrototype {
    return new Admin(this.id, this.name, this.age, this.email, this.password);
  }
}
