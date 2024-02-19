import { createHello } from "./util.js"

// console.log(createHello("tim"))

const userName = "Max"
const userAge = 20

const user = {
    name: 'Max',
    age: 34,
    greet(message) {
        console.log("Hello", message)
        console.log(this.age)

    }
}

console.log(user)
console.log(user.name)
user.greet("from the included function");

class User {
    constructor(name, age) {
        this.name = name
        this.age = age;
    }
    greet() {
        console.log("hello")
    }
}

const user1 = new User("Manual", 35);
console.log(user1)
user1.greet();
