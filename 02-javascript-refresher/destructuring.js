// const userNameData = ["Max", "Schwarzmüller"];
const [firstName, lastName] = ["Max", "Schwarzmüller"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

console.log(firstName)
console.log(lastName)

const user = {
    name: "Max",
    age: 34
}

// const name = user.name;
// const age = user.age;

const { name: userName, age } = {
    name: "Max",
    age: 34
}
console.log(userName);

const hobbies = ["Sports", "Cooking"];

const newHobbies = ["Reading"];

const mergedHobbies = [hobbies, newHobbies]
// pulls out each values
const mergedHobbiesSpread = [...hobbies, ...newHobbies]
console.log(mergedHobbies)

const extendedUser = {
    isAdmin: true,
    ...user
}

console.log(extendedUser)