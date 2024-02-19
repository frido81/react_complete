import { greet } from "./util.js"

let userMessage = "Hello, good morning"
const userMessageC = "Hello, good morning"

// can not redeclare
// let userMessageC = "asdf"

greet("Tim", userMessage)
greet("Bob", userMessage)

