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
