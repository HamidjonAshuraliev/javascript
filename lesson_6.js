function getNestedAgeSum(obj) {
  let sum = 0;

  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      sum += getNestedAgeSum(obj[key]); // Recursively call the function for nested objects
    } else if (key === "age" && typeof obj[key] === "number") {
      sum += obj[key]; // Add the age to the sum
    }
  }

  return sum;
}

// Example nested object
let person = {
  name: "John",
  age: 30,
  children: [
    {
      name: "Alice",
      age: 5,
    },
    {
      name: "Bob",
      age: 8,
    },
  ],
  spouse: {
    name: "Jane",
    age: 28,
  },
};

// Get the sum of ages
let ageSum = getNestedAgeSum(person);
console.log(ageSum);
