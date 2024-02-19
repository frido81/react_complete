import { greet } from "./util.js"


function hello() {
    console.log("Hello!")
}

hello();
hello();
hello();
hello();

function helloWith(userName, message = "world") {
    console.log("Hello!", userName, message)
}

export function createHello(userName, message = "world") {
    return "Hello!", userName, message;
}

helloWith("Max")

const asdf = createHello("Max", "Planet")
console.log(asdf);

// arrow function, anonymous function without name used as a value

// export default function() {
// console.log("hello")
// }

export default (userName, message) => {

}

// using functions as values
function handleTimeout() {
    console.log("Timed out");
}

const handleTimeout2 = () => {
    console.log("Timed out")
}

// setTimeout(() => { console.log("Timed out") });
// setTimeout(handleTimeout2, 2000);
// not!:
// setTimeout(handleTimeout());

function greeter(greetFn) {
    greetFn();
}

greeter(() => console.log("Hi"))

// functions inside of other functions
function init() {
    function greet() {
        console.log("Hi");
    }
    greet();
}

console.log("Running greet");
init();