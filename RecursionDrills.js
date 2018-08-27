// Counting Sheep
// Write a recursive function that counts how many sheep jumps over the fence. Your program should take a number as an input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jump over the fence" until no more sheep are left.

function sheepCount(sheep){
  //if no sheep, end the function,
  if(sheep===0){
    return '';
  }
  //with each call decrement the sheep by one
  sheepCount(sheep-1);
  return(`${sheep} - Another sheep jumped over the fence.`);

}

sheepCount(3);

// Write a function that takes an array as input which contains an unknown set of numbers, and outputs an array with each input value doubled. Test your solution by trying a handful of different arrays. For example,

function doubleIt(arr){
  //if array is empty, end function
  if(arr.length===0){
    return [];
  }
  //take the first number in the array and double it
  let num = arr[0]*2;
  //add that number to a new array
  //call the function again with the first number removed
  return [num, ...doubleIt(arr.slice(1))];
}

doubleIt([1, 2, 3]);

// Reverse String
// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

function reverseIt(string){
//if string is empty, stop
  if(string.length===0){
    return '';
  }
  let letter = string[0];
  let letterArray = [];
//put letters into an array using push starting with the first character
letterArray.push(letter); 
//call function again with first character removed
reverseIt(string.splice(1));
//join the character array together
letterArray.join()
}

reverseIt('Jennifer');