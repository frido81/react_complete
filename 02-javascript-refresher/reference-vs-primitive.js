// reference vs primitive

// standard primitive, (boolean, string, number)
let userMessage = 'Hello!'

console.log(userMessage)

// can not edit this exact variable, a new location
// in memory is made, old is thrown away
userMessage = 'Hi'
console.log(userMessage)

userMessage = userMessage.concat("!!!!")
console.log(userMessage)

// reference value
const hobbies = ["Sports", "Cooking"]

// pointer (address to memory) to data stays the same,
// so can edit while staying const
hobbies.push("Working")

console.log(hobbies)
// won't work:
//hobbies = ["asdf"];