                                                         # Correct answers 
#### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

1. - A: { }
Answer : This is because the variable greeting is declared but not initialized, so it has a value of undefined. The variable greetign is then initialized to an empty object, and the console.log() function prints the value of greetign, which is an empty object.


#### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

2. - C: "12"
Answer : When the function is called with the arguments 1 and "2", the string "2" will be implicitly converted to a number before the sum is calculated. This is because JavaScript automatically converts strings to numbers when they are used in mathematical operations.


#### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

3. - A: ['🍕', '🍫' , '🥑' , '🍔']
Answer : This is because when you assign a new value to the favoriteFood property of the info object, you are not changing the value of the food array. The favoriteFood property of the info object is simply a reference to the first element of the food array.

#### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

4. - B : Hi there, undefined 
Answer : This is because the sayHi() function is called without any arguments. The name parameter is therefore undefined, and the function will return the string Hi there, undefined.

#### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

5. - C: 3 
Answer: This is because the forEach() method iterates over the nums array and calls the callback function for each element in the array. The callback function checks if the current element is greater than 0. If it is, the count variable is incremented.