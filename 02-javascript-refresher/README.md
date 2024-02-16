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
