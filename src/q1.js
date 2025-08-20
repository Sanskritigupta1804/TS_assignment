"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greetUser(user) {
    return `Hello, ${user.firstName} ${user.lastName}!`;
}
const user = { firstName: "Sanskriti", lastName: "Gupta" };
console.log(greetUser(user));
