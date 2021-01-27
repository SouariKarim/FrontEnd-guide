---
path: "/JS-Regex"
date: "2021-01-24"
title: "Javascricpt regular expressions"
author: "Souari Karim"
theme: "javascript"
---

## REGEX in javascript :

[JS REGEX]("https://www.w3schools.com/jsref/jsref_obj_regexp.asp")

A regular expression is an object that describes a pattern of characters.

## Syntax

```javascript
;/pattern/defiimors
```

## Modifiers

| Modifier | Description                                                                          |
| -------- | ------------------------------------------------------------------------------------ |
| g        | Perform a global match (find all matches rather than stopping after the first match) |
| i        | Perform case-insensitive matching                                                    |
| m        | Perform multiline matching                                                           |

## RegExp Object Methods

| Method     | Description                                              |
| ---------- | -------------------------------------------------------- |
| compile()  | Deprecated in version 1.5. Compiles a regular expression |
| exec()     | Tests for a match in a string. Returns the first match   |
| test()     | Tests for a match in a string. Returns true or false     |
| toString() | Returns the string value of the regular expression       |

## Brackets

| Expression                                                         | Description                                                 |
| ------------------------------------------------------------------ | ----------------------------------------------------------- |
| [abc]                                                              | Find any character between the brackets                     |
| [^abc]                                                             | Find any character NOT between the brackets                 |
| [0-9]                                                              | Find any character between the brackets (any digit)         |
| [^0-9]                                                             | Find any character NOT between the brackets (any non-digit) |
| [click me]("https://www.w3schools.com/jsref/jsref_obj_regexp.asp") | Find any of the alternatives specified                      |

**regex can make your search() or replace() method more powerful**

```javascript
var str = " visit us "
str.search(/us/i)
str.replace(/us/i, "you")
str.test(/us/i)
```
