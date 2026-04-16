import type { Prototype } from "./Prototype.js";

class User implements Prototype {

    constructor(public name: string, public age: number) {}

    clone(): User {
        return new User(this.name, this.age);
    }
}

export default User;
