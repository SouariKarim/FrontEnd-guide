---
path: "/JS-strings"
date: "2021-01-24"
title: "Javascricpt strings"
author: "Souari Karim"
theme: "javascript"
---

## Strings methods :

```javascript
var text = "hello world "
```

1. strings length

```javascript
var x = text.length
```

1. finding a string in a string

```javascript
var pos = text.indexOf("world")
```

1. extract a string parts

```javascript
var res: text.slice(7,13)
```

1. subsstring is similar to slice but cannot take negative indexes

```javascript
var x = text.substring(7, 13)
```

1. substr is similar to slice but the second parameter specifies the length of the extracted part and without the second parameter it will extract the rest

```javascript
var x = text.substr(7, 2)
```

1. replace() returns a new string

```javascript
var n = text.replace("world", "there")
```

1. removing white space

```javascript
var str = text.trim()
```

1. converting a string to an array

```javascript
text.split("")
```
