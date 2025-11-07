function sum(n) {
  if (typeof n !== 'number' || n % 1 !== 0) {
    return "The value passed is not a number";
  }
  return (n * (n + 1)) / 2;
}

function factorial(num) {
  if (typeof num !== 'number' || num < 0 || num % 1 !== 0) {
    return "The value passed is not a valid non-negative integer";
  }
  let result = 1;
  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
}

function funkyMath(...any) {
  if (any.length === 2) {
    return any[1] - any[0];    
  } else if (any.length === 3) {
    return any[0] + any[1] + any[2];
  } else if (any.length === 4) {
    return (any[0] + any[1]) / (any[2] + any[3]);
  }
    return "Invalid number of arguments";  
}   

const numbers = [1, 2, 6, 33, 44, 45];
const oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  }
}

oddNumbers.sort((a, b) => a - b); {
}

let object,me = {
  firstname: "Marco",
  lastname: "fisher",
  age: 23,
  favouriteColor: "blue",
  dreamcar: "BMW"
};

me.favouritefood = "Pizza";
delete me["age"]; 

console.log(sum(5));
console.log();
console.log(factorial(7));
console.log();
console.log(numbers);
console.log();
console.log(oddNumbers);
console.log();
console.log(funkyMath(10, 4));
console.log();
console.log(me);