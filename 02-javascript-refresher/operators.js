import { greet } from "./util.js"

greet("Jim", "asdf" + 10 / 4)
greet("Jim, integer equality test", 10 === 10)
greet("Jim, integer smaller then or equal test", 10 <= 10)
greet("Jim, string equality test", "test" === "test")
