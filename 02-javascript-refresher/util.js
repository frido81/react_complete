export let apiKey = '33';
export let abc = 'alphabet';
export default "defaultvalue";

export function greet(userName, message) {
    console.log("Hello!", userName, message);
}

export function createHello(userName, message = "world") {
    return `Hello! ${userName} ${message}`;
}
