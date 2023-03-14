"use strict";
// Define fruit array
let fruits = ["apricot", "banana", "cherry", "date", "Blueberry"];
console.log('fruits array before manipulation', fruits);
// The push method adds a new fruit to the end of the array.
fruits.push('mango');
console.log('fruits array after push', fruits);
// The unshift method adds a new fruit to the beginning of the array.
fruits.unshift('apple');
console.log('fruits array after unshift', fruits);
// The splice method removes one fruit at index 4 and inserts a new fruit in its place.
fruits.splice(4, 1, 'kiwi');
console.log('fruits array after splice', fruits);
