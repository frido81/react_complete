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
