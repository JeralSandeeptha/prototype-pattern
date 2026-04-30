import { Admin } from "./classes/Admin.js";
import { User } from "./classes/User.js";

const user1 = new User("Alice", 30);

const user2 = user1.clone();

console.log(user1); // User { name: 'Alice', age: 30 }
console.log(user2); // User { name: 'Alice', age: 30 }
console.log(user1 === user2); // false

user2.name = "Bob";
console.log(user1); // User { name: 'Alice', age: 30 }
console.log(user2); // User { name: 'Bob', age: 30 }

const admin1 = new Admin(1, "Charlie", 40, "charlie@example.com", "password");
const admin2 = admin1.clone();
console.log(admin1); // Admin { id: 1, name: 'Charlie', age: 40, email: 'charlie@example.com', password: 'password' }
console.log(admin2); // Admin { id: 1, name: 'Charlie', age: 40, email: 'charlie@example.com', password: 'password' }
console.log(admin1 === admin2); // false

admin2.name = "Dave";
console.log(admin1); // Admin { id: 1, name: 'Charlie', age: 40, email: 'charlie@example.com', password: 'password' }
console.log(admin2); // Admin { id: 1, name: 'Dave', age: 40, email: 'charlie@example.com', password: 'password' }