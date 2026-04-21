import User from "./classes/User.js";

// create the first user
const user1 = new User("John Doe", 30);
console.log(user1);

// clone the first user to create a second user and change the fields of the second user as we want without affecting the first user
const user2 = user1.clone();
user2.name = "Jeral Sandeeptha";
user2.age = 25;
console.log(user2);
