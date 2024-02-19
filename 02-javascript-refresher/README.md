# Section 2: Javascript refresher

## 11 - Module Introduction

optional, not a full course. refresher, concepts needed for
react apps.

-   core syntax & rules
-   essential, modern javascript features
-   key javascript features ussed in react

http://javascript.info
https://notes.zolder.org/books/Programming/Javascript/JavaScript%20the%20definitive%20guide.pdf
https://notes.zolder.org/books/Programming/Javascript/Professional%20JavaScript%20for%20Web%20Developers.pdf
https://notes.zolder.org/books/Programming/Javascript/jsdg.html

~/wrk/069-pdf/toc/toc.py -w "https://www.zolder.org/books/Programming/Javascript/" JavaScript\ the\ definitive\ guide.pdf > jsdg.html

## 12 - Starting Project

## 13 - Adding JavaScript To A Page & How React Projects differ

### many environments

-   in the browser
-   on a computer (server side) (node/deno)
-   mobile apps (capacitor/react native)

### adding to a website

-   <script></script>
-   <script src="script.js"></script>
-   defer (imported scripts run after html parsed)
-   type="module" makes script module, unlocks "import", import AND export syntax
-   with react you don't use script, react uses a BUILD process

## 14 - React projects use a build process

-   The code you write is tranformed before it's sent to the browser
-   package.json: react-scripts NPM START
-   raw unprocesed won't execute JSX
-   not optimized/minified reduced

## 15 - Import and Export

-   <script src="script.js" type="module"></script>
-   import { apiKey } from "./util.js"
-   export let apiKey = '33';
-   not needed in react, since it's bundled
-   export default "value"
-   for default, only one per file
-   import apiKey from "./util.js"
-   can use any name in the include
-   import \* as util from "./util.js"
-   util.apiKey or util.default
-   import { apiKey as akey } from "./util.js"
-   see [written examples](app.js)

## 16 - Revisiting Variables & Values

-   check [example](variables-and-values.js)
-   all about data & values
-   Strings: text, single/double, backticks
-   Number: positive or negative, float or integer
-   Boolean: True, False
-   Null & Undefined:
    -   There is no value: undfined default if no value was assigned,
    -   null explicitly assigned by developer
-   Object
-   variables are named containers that store a value
-   used for reuseability and readability
-   Variables are named with `let`

    1. Must not contain whitespace or special chars
    2. May contain number but must not start with number
    3. Must not clash with reserved keywords
    4. should use camelCasing: userName, isCorrect
    5. should describe what the "thing" it idenitifies contains or does:
        - Recommended: userName, isCorrect, loadData
        - Uncommon: userDataPoint, correctness, dataLoader

-   const can not be redeclared, is best to use as default

## 17 - Revisiting operators

-   check [example](operators.js)
-   `+ -  / * ` standard
-   `-` is concatonator with strings
-   `===` equality checker
-   `<= >=` standard

## 18 - Revisiting functions & parameters

-   check [example](functions-and-parameters.js)
-   code executed in the future when called
-   function definition
-   function execution
-   call function
-   parameters, standard
-   default parameters with `=`
-   return default
-   name describe what it does

## 19 - Arrow functions

arrow functions used as anonymous function, functions without name

## 20 - More on arrow functions

1. omitting pramaeter list
   omit parameter list if you have ONE parameter:

```
(username) => {}
username = {}
```

note:
NO parameter, parentheses must NOT be omitted!
`() => { ... }`
more parameters, parenetheses must NOT be omitted!
`(username, userAge) => { ... }`

2. Omitting function body curly braces
   If there is no other logic but only the return statement
   you may omit curly braces and return

instead of:

```
number => {
    return number * 3;
}
```

you could write
`number => number * 3;`

INVALID code:

```
number => return number * 3;
number => if (number === 2) {return 5};
```

3. Special case: just returning an object

`number => { age: number }; // trying to return an object`

should be
`number => ( {age: number} )`

## 21 - Revisiting objects & classes

-   check [example](objects-and-classes.js)
-   can be used to group multiple values together
-   use {} to denote new object
-   include functionname(), without function keyword for added function
-   optionally use class for classes, not used much in this course
-   with class names use Capital names
-   constructor, arguments
-   save in class variable with this
-   create new object from class with `new`

## 22 - Arrays - Array methods like map()

-   check [example](arrays.js)
-   standard
-   multidimensional
-   see array function like map with array functions
-   .map returns new array
-   notice that when using objects use {} object notation,
-   need to escape the curly braces with ()

## 23 - Destructuring

-   check [example](destructering.js)
-   use [] for destructuring
-   when destructering objects, must use {} and field names from object
-   optionally use : to specify other variable name

## 24 - Destructuring in function parameter lists

```
function storeOrder(order) {
    localStorage.setItem('id', order.id);
    localStorage.setItem('currency', order.currency);
}

function storeOrder2({id, currency}) {
    localStorage.setItem('id', id)
    localStorage.setItem('currency', currency)
}

storeOrder2({id: 5, currency: "USD", amount: 15.99});
```

## 25 - The spread operator

-   check [example](destructering.js)
-   use triple dot, to pull out values
-   can also be used in objects

## 26 - Control structures

-   check [example](control.js)
-   loop with (const hobby of hobbies) !

## 27 - Manipulating the DOM

-   check [example](dom.js)
-   not used in this course, we use React

## 28 - Using functions as values

-   check bottom [example](functions-and-parameters.js)

## 29 - Defining functions inside of functions

-   check bottom [example](functions-and-parameters.js)

## 30 - Reference vs Primitive values

-   check [example](reference-vs-primitive.js)
