---
path: "/JS-best-practices"
date: "2021-01-24"
title: "Javascript best practices"
author: "Souari Karim"
theme: "javascript"
---

## Javascript best practices :

1. A variable declared without a value will have the value of undefined .
1. if you add a number and a string the result will be a string
1. you can empty an object by setting it to Null
1. the difference between undefined and Null is that they are equal in value but different in type ( undefined and object ).
1. use backslash \ escape character turn special caracter into string caracter

```javascript
\'   \"   \\
```

**statement rules**

1. use camel case for identifier names (variables and functions)
1. all names starts with a letter
1. put spaces around operators
1. always use 2 spaces for indentation of code blocks
1. always end a simple statement with a ;
1. put the opening bracket at te end of the statement
1. put the closing bracket on a nes line without space
1. do not end a complex statement with a ;

**object rules**

1. place the opening bracket on the sameline as the object line
1. use colon : plus one space beween properties and values
1. do not add a comma after the last property-value pair
1. place the closing bracket on a new line
1. always end with a semicolon

---

1. always declare variables on the top
1. initialize variables
1. avoid using the new keyword to declare variables
1. use default function arguments
1. end switch statement with a default
1. js animations should be relative to a container element

**the BOM : browser object model**

1. window object size

   - window.innerHeight
   - window.innerWidth
   - window.open() - open a new window
   - window.close() - close the current window
   - window.moveTo() - move the current window
   - window.resizeTo() - resize the current window

1. window screen

   - screen.width
   - screen.height
   - screen.availWidth
   - screen.availHeight
   - screen.colorDepth
   - screen.pixelDepth

1. windows location

   - window.location.href returns the href (URL) of the current page
   - window.location.hostname returns the domain name of the web host
   - window.location.pathname returns the path and filename of the current page
   - window.location.protocol returns the web protocol used (http: or https:)
   - window.location.assign() loads a new document

**javascript timing**

1. The setTimeout() Method : window.setTimeout(function, milliseconds);

   - How to Stop the Execution?
     - window.clearTimeout(timeoutVariable)

1. The setInterval() Method : window.setInterval(function, milliseconds);

   - How to Stop the Execution?
     - window.clearInterval(timerVariable)

---
