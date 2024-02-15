# Section 1: Getting Started

## 01 - Welcome to the course

## 02 - What is react and why should I use it

react javascript user interface library

smooth user interfaces, no reload, smooth transitions like mobile

why a library vs vanilla:

-   cumbersome
-   error-prone
-   hard to maintain or edit
-   simpler mental model

## 03 - ReactJS vs "Vanilla Javascript" - Why use React?

-   cumbersome
-   error-prone
-   hard to maintain or edit
-   simpler mental model

2 basic demos websites: tabbed site, react vs vanilla

https://codesandbox.io/p/sandbox/react-vs-vanilla-demo-uc08fv
https://codesandbox.io/p/sandbox/vanilla-js-demo-6049kj?file=%2Fstyles.css

> niet proberen te downloaden, kan niet, is alleen voorbeeld.

vanilla: heel veel infrastructuur zelf bouwen, is niet handig en wordt
toch steeds anders. beste om meest gebruikte tool goed te leren en
vanilla javascript als basics goed te begrijpen.

-   mixen van html en javascript, geen templates of literal strings
-   let op useState, activeContentIndex is managed variable
-   als setActiveContentIndex wordt getriggered, react kijkt waar deze opnieuw
    moet worden ingevuld.

```js
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      <header>
        <img src="react-logo-xs.png" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
```

### Declarative UI Programming

With React, you _define the target UI state(s)_ - not the steps to get there !
Instead, React will figure out & perform the necessary steps.

Declerative: define the goal, not the steps

> alleen bezig met content

```
let content

if (user.isLoggedIn) {
    content = <button>Continue</button>
} else {
    content = <button>Log In</button>
}
return content;
```

Imperative: define the steps not the goal

> zie veel gedoe met html elements parsen, toevoegen

```
let btn = document.querySelector('button')
if (user.isLoggedIn) {
    button.textConetnt = 'Continue';
} else {
    button.textContent = 'Log In';
}

document.body.append(btn);
```

## 04 Editing our first React App

https://codesandbox.io/p/sandbox/first-react-app-start-7ec9fd?file=%2Fsrc%2Findex.js

> no access to codesandbox
>
> Hi there, is the exercises code somewhere else as well? My company web security policy doesn't allow me to sign in with codesandbox.
> Joel — Teaching Assistant
> Just watch the videos in this case, we'll very quickly move away from using codesandbox, and working in our local environment instead.
> from: lecture 9

## 05 About this course and course outline

It's a modular course

01 - Getting Started
02 - Javascript Refresher
03 - React Essentials
04 - Essentials - Deep Divce
05 - Essentials - Practice

06 - Styling
07 - Debugging
08 - Refs & Portals
09 - Practice - Quiz App
10 - Context API & useReducer
11 - Side Effects
12 - Practice - Quiz App

13 - Behind the scenes & optimization
14 - Alternative Way of building Components - Class Based
15 - Data fetching & http requests
16 - Custom hooks

17 - Forms
18 - Practice - Food Order App
19 - Diving into Redux
20 - Advanced Redux

21 - MultiPage SPA - Routing
22 - Authentication
23 - Deploying React Appas
24 - React Query

25 - NextJS

26 - Animations
27 - React Patterns & Best Practices
28 - Replacing Redux with React Hooks
29 - Testing React Apps (Unit Tests)
30 - React + TypeScript

31 - Optional React Summary + Core Features
32 - Course Roundup
33 - Course Update & Old Course Content
