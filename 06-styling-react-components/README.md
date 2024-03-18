# 104: Module introduction & starting project

-   Styling with vanilla CSS
-   Scoping styles with CCS Modules
-   CSS-in-JS styling with "Styled components"
-   Styling with Tailwind CSS
-   Static & Dynamic Styles

# 106: Styling react app

-   Vanilla Advantage

    -   CSS code is decoupled from JSX code
    -   you write CSS code as (maybe) know and (maybe) love
    -   CSS code can be written by another developer who
        needs only a minimal amount of access to your JSX
        code.

-   Vanilla disadvantages
    -   you need to know css code
    -   css code is not scoped to components, css
        rules may clash acoss components. some css
        classes used in other components

# 107 vanilla CSS styles are not scoped to components

-   Inline adantage

    -   Quick & easy to add JSX
    -   Style only affect the element to which you add them
    -   dynamic styling simple

-   Inline disadvantage
    -   need to know css
    -   need to style every element individually
    -   no seperation between css and jsx code

# 110 dynamic & conditional styling with CSS files & classes

-   className={emailNotValid ? 'invalid' : undefined}
-   <label className={`label ${emailNotValid ? 'invalid' : ''}`}>Email</label>

# 111 Scoping CSS Rules with CSS Modules

-   CSS modules
-   enforced by build process
-   not enforced by browser
-   classnames guaranteeds per file
-   "import classes from './Header.module.css';"
-   <p className={classes.paragraph}>A community of artists and art-lovers.</p>
-   <p className={1 == 1 ? classes.paragraph : undefined}>A community of artists and art-lovers.</p>
-   <p className={`${classes.paragraph}`}>A community of artists and art-lovers.</p>
-   same advantages, but now scoped to component
-   disadvantage, may end up with relatively large amount of small css files

# 112 Introducing "Styled Components" (Third-party Package)

-   import { styled } from 'styled-components';
-   `npm install styled-components`
-

```js
const ControlContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
`;

<ControlContainer></ControlContainer>;
```

-   build process creates classes `<div class="sc-dmyCSP hXKCLo"`
-   forwards all props to underlying html element

# 113 Creating Flexible Components with Styled Components

-   styles are closer to the jsx code

# 115 Styled Components: Pseudo Selectors, Nested Rules & Media Queries

-   pseudo selectors, :hover

# 116 Creating Reusable Components & Component Combinations

Introducing Tailwind CSS For React App Styling
Adding & Using Tailwind CSS In A React Project
Tailwind: Media Queries & Pseudo Selectors
Dynamic & Conditional Styling with Tailwind
Migrating The Demo App to Tailwind CSS
Tailwind CSS: Pros & Cons
