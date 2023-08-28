---
title: Functional Programming with JS/TS!
layout: blogPost.njk
tags: blogs
date: 2023-08-29
---


### Higher Order Functions:

In JavaScript, functions are considered to be "first class citizens" values in the language. This means they can be treated like any other value such as a string or number. Here is an example:

```ts 
const triple = (x) => x*3

const multiplyByThree = triple()
console.log(multiplByThree(30)) //Returns 90

```

Therefore, as we see above this allows functions to be assigned to variables, but allso allows them to be passed as arguments to other functions or returned as values from functions. These functions that either take functions as thier argument or return values are called **Higher Order Functions**.

Higher order functions are good for compisition, ie they allow us to take lots of smaller functions, and pass them into larger functions, to create *readable, functional code*.

The most common Higher Order Functions in JavaScript are the `Array.prototype.X` functions, which include: `Array.prototype.map`, `Array.prototype.filter`, and `Array.prototype.reduce`. These functions take a function as an argument and apply it to each element of an array to produce a new array.

Let's look at an example of a higher order function, with `Array.filter()`

```ts 
const arr :
  {name: string, 
  pet: string} [] 
  = [
  {
  name: "Ryan", 
  pet: "cat"
  },
  {
  name: "Frank", 
  pet: "Dog"
  },
  {
  name: "Liam", 
  pet: "Fish"
  },
]


console.log(
  arr.filter(function(person) {
    return person.pet == "Dog"
  }
))
//returns [{"name": "Frank", "pet": "Dog"}] only
```

Let's see how intelli-sense describes our `Array.filter` function:

>A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
>Returns the elements of an array that meet the condition specified in a **callback function.**

The `Array.filter` function takes our **call back function**, which we have basically above as:

```ts
function(person) {
return person.pet == "Dog"
}
```

and it calls this for each element in the array, returning all entires which return true, and in our case true is where `person.pet == "Dog"`.

This lends well to composability, as we can even assign our callback function to a variable:

```ts
const isDog = function(person : {name: string, pet: string}) {
    return person.pet == "Dog"
  }

console.log(
  arr.filter(isDog)
  )
  //returns [{"name": "Frank", "pet": "Dog"}] only
```

Now our `isDog` function is decoupled from our filtering operation, and we can reuse this function in other places. 

We can also rewrite our `isDog` funciton in a more modern arrow syntax way:

```ts
const isDog = ((person : {name: string, pet: string}) => person.pet == "Dog")
```


### Array.map()

Map is another Higher Order Function in JS, that allows us to apply a transormation function to each element in an array, reurning a new array with the transformed elements.

Let's see how intelli-sense describes `Array.map`:

> A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
> Calls a defined callback function on each element of an array, and returns an array that contains the results.

The syntax for using Array.map() is as follows:

``` ts
array.map(function(currentValue, index, array) {   // return transformed value })
```

The `function` parameter is the **callback** transformation function that will be called on each element in the `array`. It takes three parameters:

-   `currentValue`: the current element being processed
-   `index`: the index of the current element being processed
-   `array`: the array that `map()` was called upon

The `function` should return the transformed value of the `currentValue`, which will be added to the new array. So whereas `Array.filter` expected a boolean which indcates if a value is included in our filtered array, map returns a **transformed value** from our original array.

Let's see an example:

```ts
const arr :
  {name: string, 
  pet: string} [] 
  = [
  {
  name: "Ryan", 
  pet: "cat"
  },
  {
  name: "Frank", 
  pet: "Dog"
  },
  {
  name: "Liam", 
  pet: "Fish"
  },
]

const returnNames = ((person : {name: string, pet: string}) => person.name) 

console.log(
  arr.map(returnNames)
  ) //returns ["Ryan", "Frank", "Liam"]
```


### Array.reduce()

`Array.reduce()` is a built-in JavaScript method that allows you to reduce an array of values down to a single value. It does this by iterating through the array and applying a function that you define to each element of the array, accumulating a single value as it goes.

The syntax for `Array.reduce()` is:


```ts
array.reduce(callback[accumulator, initialValue])
```

The `callback` function takes two arguments: an `accumulator` and the current element being iterated over. The `initialValue` argument is optional and provides an initial value for the accumulator.

The `callback` function should return the updated accumulator after processing the current element. The `reduce()` method then uses this updated accumulator as the input for the next iteration.

Let's see what intelli-sense says abour `Array.reduce`:
- _@param_ `callbackfn` — A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
- _@param_ `initialValue` — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

For example:

```ts
const arr1: {amount: number}[] = [
{amount: 250},
{amount: 300},
{amount: 500},
{amount: 900},
{amount: 25},
]

arr1.reduce((currentTotal, currentValue) => currentTotal + currentValue.amount, 0) // returns 1975
```

Here we have taken our `currentTotal` variable intial value to `0` (this is our final argument passed to our reduce function), and we have added each `currentValue.amount` to our `currentTotal`, which we return once we have applied our **callback function** to all elements in our array.

### Advanced Array.reduce()

The beauty of `Array.reduce()` is we can combine it with other functions, to modify arrays in all sorts of ways.


For example let's start with some sample *tab-seperated* data about flowers:

```ts 
const data: string = 
`Sepal length	Sepal width	Petal length	Petal width	Species
5.1	3.5	1.4	0.2	I. setosa
4.9	3.0	1.4	0.2	I. setosa
4.7	3.2	1.3	0.2	I. setosa
4.6	3.1	1.5	0.2	I. setosa
5.0	3.6	1.4	0.2	I. setosa`
```

Let's try and convert this data into something more readable using `array.reduce()`

```ts

const data: string = 
`Sepal length	Sepal width	Petal length	Petal width	Species
5.1	3.5	1.4	0.2	I. setosa
4.9	3.0	1.4	0.2	I. setosa
4.7	3.2	1.3	0.2	I. setosa
4.6	3.1	1.5	0.2	I. setosa
5.0	3.6	1.4	0.2	I. setosa`

interface flowerDataType {
  [k: string]: string[]
}

const objFromArray = (object:flowerDataType , array: string[] )=> {
   array.forEach(item => object[`${item}`] = [])
}


const flowerData = data.split('\n')
.map(line => line.split("\t"))
.reduce((flowers, line, currentIndex) => {
  if (currentIndex == 0){
   objFromArray(flowers, line)
  } else {
  flowers["Sepal length"].push(line[0])
  flowers["Sepal width"].push(line[1])
  flowers["Petal length"].push(line[2])
  flowers["Petal width"].push(line[3])
  flowers["Species"].push(line[4])
  } 
 
  return flowers
}, {} as flowerDataType)

console.log(flowerData)

```

It works in the following way:

* The string `data` is then split into an array of strings using the newline character `\n` as a separator, and each of these strings is split again into an array of values using the tab character `\t` as a separator.

* Finally, the `reduce` function is used to iterate over the resulting array and populate the `flowerData` object with the data from each line. The resulting object contains five keys: `"Sepal length"`, `"Sepal width"`, `"Petal length"`, `"Petal width"`, and `"Species"`, each containing an array of values corresponding to the data from each line of the input string. The resulting object is then printed to the console using `console.log()`.
  
* Our `.reduce` function takes the arguments `flowers, line, currentIndex`:
	* `flowers` is our accumulator object, of type `flowerData`
	* `line` is our current iteratable array, which will be the array from `.split` functions
	* `currentIndex` is our... currentIndex

here this returns our output:

```JSON

{ "Sepal length": [ "5.1", "4.9", "4.7", "4.6", "5.0" ], "Sepal width": [ "3.5", "3.0", "3.2", "3.1", "3.6" ], "Petal length": [ "1.4", "1.4", "1.3", "1.5", "1.4" ], "Petal width": [ "0.2", "0.2", "0.2", "0.2", "0.2" ], "Species": [ "I. setosa", "I. setosa", "I. setosa", "I. setosa", "I. setosa" ] }
```


Here you can see we have used `.reduce` with `.map` to create an advanced functionality with arrays.


