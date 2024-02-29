# Section 3: React Essentials - Components, JSX, Props, State & More

## 34 - Module Introduction

-   components
-   jsx
-   props
-   how to work with data
-   how to work with state, super important
-   static, dynamic & conditional data

# 35 - It's all about components

-   React provides dozens of usefull tools
-   Components first building block
-   key building blocks (frames)
-   html/css/js -> react component
-   split up user interfaces
-   small buildoing blocks/re-use
-   more manageable. code/html in one placeA
-   reusable/related code lives together/seperation of concerns

# 36 - setting up the starting project

```
cp ../resources/attachments/03\ React\ Essentials/01-starting-project.zip .
code -n
npm install
npm run dev
```

# 37 - JSX & React components

-   index.html
-   components function must follow these two rule
-   must art with upper case CamelCase
-   return a renderable context, return JSX, or
-   string number boolean null

# 38 - Creating & using a first custom component

-   see [example](01-starting-project/src/App.jsx)
-   added `<Header/>` component

# 39 - Components and file extensions

-   jsx is not vanilla standard and can only be built by react tools
-   this is optional, sometimes .js is used

# 40 - How react handles components & how it builds a component tree

-   build process
-   everything builds from div id=root inside index.html, App is top level
-   all components are hung as a tree of component on App component
-   built-in rendered as DOM node, custom components executed as functions
-   traverses all custom components until only built-ins are output

# 41 - Using and OUtputting Dynamic values

-   use {} inside JSX for code (no control structures, must return a value)
-   control structures above the return statement

# 42 - Setting HTML Attributes dynamically & loading image files

-   during bundling png files might get lost
-   use assets by importing them css/image
-   use attribute without quotes

# 43 - Making components resuable with props [core]

-   in principle components are reusable
-   sometimes just need it once
-   somtimes multiple times but with different input data, _PROPS_
-   can also pass in arrays, numbers etc.

# 44 - Alternative Props Syntaxes

-   ```
    function CoreConcept(props) {
    function CoreConceptDestructured({ image, title, description }) {
    <CoreConcept {...CORE_CONCEPTS[0]} />
    ```

# 45 - More syntaxes

-   more syntaxes used for props
-   whole object, more destructering, default values

# 46 - Best Practice, storing components in Files & using a good project structure

-   components directory
-   check imports and exports
-   also for style and image files

# 47 - Storing component style files next to components

-   styles can be in seperate files
-   they are NOT scoped and global

# 48 - Component Composition -: THe special "children" prop

-   props.children refers to text between component tags
-   `<Modal>text between tags</Modal>`
-   can also be complex html
-   can also destructure ({children})
-   children vs props both valid, personal preference, need
    to be aware about differences

# 49 - Reacting to events

-   no addeventlistener and direct dom handling
-   add functions inside component
-   add `onEvent` as attribute `<button onClick{handleClick}>
-   no paranthesis

# 50 - Passing functions as values to props

-   can also pass complete function as prop from outside component
-   common and superimportant pattern
-   from component no access to outside elements

# 51 - Passing Custom arguments to Event Functions

-   use arrow functions with custom argument
-   `<TabButton onSelect={() => handleSelect('components')}>Components</TabButton>`

# 52 - How not to update the UI

-   bare variable and update with function
-   by default components execute only _ONCE_
-   you have to tell react if a component should be executed again

# 53 - Managing State and using hooks

-   can not use regular variable because react doesn't update
-   need to tell react with state
-   with useState
-   all functions with use are react Hooks
-   must only be used in component components or in other react hooks
-   must use on the top level
-   useState always returns 2 elements

```js
//   current state value, state update function   = initial state value
//   may change if component  update the stored value
//   executes again           & tells react to rexecute the
//                            functino in which useState was
//                            called
let [selectedTopic, setSelectedTopic] = useState('Please click a button');
```

# 56 - CSS Styling & Dynamic styling
