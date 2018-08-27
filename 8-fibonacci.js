// Fibonacci
// Write a recursive function that prints the fibonacci sequence of a given number. The fibonnaci sequence a series of numbers in which each number is the sum of the two preceding numbers. For example the 7th fibonacci number in a fibonaci sequence is 13. The sequence looks as follows: 1 1 2 3 5 8 13.

//recusive
function fib(num) {
  if (num <= 0) {
    return 0;
  }
  if (num <= 2) {
    return 1;
  }
  return fib(num - 1 ) + fib(num - 2);
}
console.log(fib(19));
  
//iterative
function fibIt(num){
  if (num <= 0) {
    return 0;
  }
  if (num <=2) {
    return 1;
  }
  let arr=[0,1];
  for (let i = 2; i < num; i++) {
    arr.push(i-2 + i-1);
  }
  return arr.join();
}
  
console.log(fibIt(5));