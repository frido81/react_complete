# Module Introduction

Problem of Shared State: prop drilling
Embracing _Component Composition_
-> sometimes easier to change up composition of components, use {children} and put
functions there
Sharing State with _Context_
-> better to isolate shared global functions to a shared global component with context
all functions can be put in global state. 'sharedness' is done by inserting component
in certain places in tree.
Managing complex state with _Reducers_
-> instead of useState everywhere use global functions pointer with 'add','remove' etc.
optionally couple this with context component.

# Understanding Prop Drilling & Project Overview

Prop drilling: passing shared data through multiple component
even though don't directly need data

# Prop Drilling: Component Composition as a Solution

# Introducing the Context API

# Creating & Providing The Context

# Consuming the Context

# Linking the Context to State

# A Different Way Of Consuming Context

# What Happens When Context Values Change?

# Migrating the Entire Demo Project to use the Context API

# Outsourcing Context & State Into a Separate Provider Component

# 173: Introducing the useReducer Hook

a function that reduces one or more complex values to a simpler one

# Dispatching Actions & Editing State with useReducer
