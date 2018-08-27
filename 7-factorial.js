// Factorial
// Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and one. The factorial of 5 is equal to 5 * 4 * 3 * 2 * 1 = 120

//stop is the number is 0
//with each call multiply by num-1

//recursive
function factorial(num){
  if(num===1){
    return 1;
  }
  return num*factorial(num-1);
}
console.log(factorial(5));

//iterative
function factorialIt(num){
  let total=1;
  for(let i=num; i>=1; i--){
    total *=i; 
  }
  return total;
}
console.log(factorialIt(5));