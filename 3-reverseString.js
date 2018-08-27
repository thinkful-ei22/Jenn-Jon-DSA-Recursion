// Reverse String
// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

//recursive
function reverseString(string){
  if(string.length<=0){
    return '';
  }
  return string.slice(-1) + reverseString(string.slice(0, -1));
}
reverseString('string');
//iterative
function reverseStringIt(string){
  let newString = [];
  for(let i=0; i<string.length; i++){
    newString.push(string.charAt(i));
  }
  return newString.reverse().join('');
}
reverseStringIt('string');