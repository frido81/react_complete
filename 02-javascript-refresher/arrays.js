
import { createHello } from "./util.js"

console.log(createHello("arrays"))

let hobbies = ['Jogging', 'Cooking', 'Reading'];
const content = [
    [0, 1, 2],
    [3, 4, 5]
]

console.log(hobbies);

hobbies.push("Working")

console.log(hobbies);

console.log(hobbies.findIndex((item) => {
    return item === "Reading"
}));

const index = hobbies.findIndex(item => item === "Sports")

const realHobbies = hobbies.map((item) => item + "!")

console.log("map:", realHobbies);
// notice that when using objects use {} object notation,
// need to escape the curly braces with ()

const editedHobbies = hobbies.map((item) => ({ text: item }))


console.log("editedHobbies:", editedHobbies);

function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects
    return numberArray.map((item) => ({ val: item }))
}

console.log(transformToObjects([1, 2, 3]))

