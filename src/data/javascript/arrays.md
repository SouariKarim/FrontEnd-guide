---
path: "/JS-arrays"
date: "2021-01-24"
title: "Javascricpt arrays"
author: "Souari Karim"
theme: "javascript"
---

## Arrays :

1. you should use objects when you want the element names to be strings , and you should use arrays when you want element to be numbers.
<hr />

let's take this example

```javascript
let arr = [1, 2, 3, 4, 5]
```

1.  converting array to string

```javascript
arr.toString()
```

```javascript
arr.join(-)
```

1. pop() removes the last element of an array and returns its value
1. push() adda anew elemnt to an array at the end and returns the new array
1. shift() removes the first element , and returns the string that was shifted out
1. unShift() adds a new element at the beginning of the array and returns new array length
1. do not use the delete() methods coz it may leave undefined holes, use pop() and shift() instead
1. splice( to remove or add elemnts to an array

```javascript
arr.splice(2, 2, 9, 10)
```

start with the position 2 in the array , delete two elements , and add tne numbers 9 and 10;

```javascript
arr.splice(0, 2)
```

1. concat() merges arrays in one

```javascript
let arr = []
let arr1 = []
let arr2 = arr.concat(arr1)
```

1. sorting an array

```javascript
arr.sort()
```

to sort a numeric array

```javascript
arr.sort(function (a, b) {
  return a - b
})
```

to get the highest or lowest number in an array , you have to sort it first and get the first or last element

### Javascript arrays interaction methods :

1. foreach() calls a function once for each array elemnt

```javascript
var fruits = ["apple", "orange", "cherry"]
fruits.forEach(myFunction)

function myFunction(item, index) {
  document.getElementById("demo").innerHTML += index + ":" + item + "<br>"
}
```

1. map() creates a new array by performing a function on each array element , it does not change tthe original array

```javascript
var numbers = [4, 9, 16, 25]
var x = numbers.map(Math.sqrt)
document.getElementById("demo").innerHTML = x
```

1. filter() creates a new array with array elements that passes a test

```javascript
var ages = [32, 33, 16, 40]

function checkAdult(age) {
  return age >= 18
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.filter(checkAdult)
}
```

1. reduce() runs a function on each array element to produce a single value

```javascript
var numbers = [175, 50, 25]

document.getElementById("demo").innerHTML = numbers.reduce(myFunc)

function myFunc(total, num) {
  return total - num
}
```

1. indexOf() search for an element and retruns it's position

```javascript
arr.indexOf(item, start)
```

1. find() returns the value of the first array element that passes a test function

```javascript
var ages = [3, 10, 18, 20]

function checkAdult(age) {
  return age >= 18
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.find(checkAdult)
}
```
