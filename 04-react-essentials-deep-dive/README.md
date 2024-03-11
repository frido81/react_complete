# Section 4: React Essentials - Deep Dive

## 59: Module introduction

-   beyond the basics
-   more JSX, replace with non JSX
-   More components and state
-   Advanced state
-   Patterns & Best practices
-   Old project + tic tac toe

# 60: Don't have to use JSX

-   can use React.createElement

# 61: working with fragments

-   jsx return elements must have ONE parent element, not multiple
-   jsx is indeed React.createElement, needs one element
-   can use fragment if you don't want to render extra div
-   use Fragment or <>

# 62: When should you split components

-   App() is completely updated
-   Header is also re-executed
-   Being able to split component is an important stkill

# 64: SPlitting compoennts by feature and state

-   refactor so compile/build of dom only happens in specific components
-   also styles are confined

# 65: Problem: Props are not forwarded to inner elements

-   Forwarded props
-   Multiple Component Slots
-   Element identifiers as Props
-   Default Prop values
-   <Section id="asdf"> not forwarded to inner element <section id="">, need to set it manually
-   need to destructure props and set it manually, also className

# 66: forwarding props to wrapped elements

-   export default function Section ({title, children, ...props})
-   merge leftover props inside destructuring
-   automatically spread out in "<section ...{props}>"
-   use slots to add jsx code if you need extra children with jsx code
-   see [example](./01-starting-project/src/components/Examples.jsx)

# 67: settings component types dynamically

-   receive a component as a prop, prop can be usable as a component
-   must start with uppercase character
-   strings names for built-in html elements, and component functions
    inside {} ({Section})

# 68: Setting default prop values

-   simple with Buttoncomponent="menu"

# 69: Onwards to the Next Project & Advanced concepts

-   Multiple state values
-   Nested Lists
-   Array & Object states
-   Lifting state up
-   Derived state
-   Component functions vs normal functions

# 75: Components work in isolation

-   (click) events are only done by

# 77: Updating State Based on old state

-   "setEditing (!isEditing)" doesn't work with state like this
-   instead pass a function to your state updating function, this function
    will automatically called by react and will reccive the guaranteed latest
    state value

# 78: User Input & Two way binding

-   two way binding: handle onchange, set variable with called function, show with value
    in input element

# 81: Lifting State Up

-   sometimes state needs to be lifted up to closess ancestor component that has access to
    all components that needs to work with that state.
-   Ancestor manages state of both Child1, Child2
