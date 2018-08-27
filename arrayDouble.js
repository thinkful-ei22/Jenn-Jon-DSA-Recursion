//Array Double
// Write a function that takes an array as input which contains an unknown set of numbers, and outputs an array with each input value doubled. Test your solution by trying a handful of different arrays. For example,

//recursive
function arrayDouble(arr){
  //if array is empty, end function
  if(arr.length===0){
    return [];
  }
  //take the first number in the array and double it
  let num = arr[0]*2;
  //add that number to a new array
  //call the function again with the first number removed
  return [num, ...arrayDouble(arr.slice(1))];
}
arrayDouble([1, 2, 3]);
  
//iterative
function arrayDoubleIt(arr){
  return arr.map(num => num*2);
}
arrayDoubleIt([1,2,3]);