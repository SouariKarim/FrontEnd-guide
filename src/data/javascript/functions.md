---
path: "/functions"
date: "2021-01-23"
title: "About JS functions"
author: "Souari Karim"
theme: "javascript"
---

1. a js function is executed hen something calles it
1. when js reaches a return statement , the function will stop the execution.
1. local variables are only recognized inside their function , variables with the samee name can be used in different functions
1. local variables are created when a function sstarts and deleted when the function is completed .

## classes

```javascript
class Car {
  constructor(name, year) {
    this.name = name
    this.year = year
  }
  age(x) {
    return x - this.year
  }
}

let date = new Date()
let year = date.getFullYear()

let myCar = new Car("Ford", 2014)
document.getElementById("demo").innerHTML =
  "My car is " + myCar.age(year) + " years old."
```
