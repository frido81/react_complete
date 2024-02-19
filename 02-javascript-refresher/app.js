
// import { apiKey } from "./util.js"

// import apiKey from "./util.js"
import * as util from "./util.js"
import { apiKey as akey } from "./util.js"
import { greet } from "./util.js"

// greet("Frido", util.apiKey)
// greet("Frido the default is known under", util.default)
greet("Frido the default is known under", akey)
// const user = {
//     name: "Max",
//     age: 34,
//     greet() {
//         console.log("Hello")
//         console.log(this.age)
//     }
// };

// user.greet();

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log("Hi")
//     }
// }

// const user1 = new User("Manuel", 35);
// console.log(user1);
// user1.greet();

// const hobbies = ["Sports", "cooking", "reading"];
// console.log(hobbies[0])
// console.log(hobbies.findIndex((item) => {
//     return item === 'cooking';
// }));

// const edited = hobbies.map((item) => item + "!")
// const edited2 = edited.map((item) => ({ text: item }));
// console.log(edited2)

// const [first, last] = ["Max", "Schwarzmuller"];

// const { name: userName, age } = {
//     name: "max",
//     age: 22
// }

// console.log(userName);
// console.log(age);

// const mergedHobbies = [...hobbies, first];
// console.log(mergedHobbies)

// const user = {
//     name: "Max",
//     age: 34
// }

// const extendedUser = {
//     isAdmin: true,
//     ...user
// }

// console.log(extendedUser);

// setTimeout(() => { console.log("timed out") }, 2000)