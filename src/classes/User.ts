import type { IPrototype } from "./IPrototype.js";

export class User implements IPrototype {
    constructor(public name: string, public age: number) {}

    clone(): IPrototype {
        return new User(this.name, this.age);
    }
}
