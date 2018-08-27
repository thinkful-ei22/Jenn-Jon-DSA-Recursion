// Counting Sheep
// Write a recursive function that counts how many sheep jumps over the fence. Your program should take a number as an input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jump over the fence" until no more sheep are left.

//recursive
function sheepCount(sheep){
  //if no sheep, end the function,
  if(sheep===0){
    return '';
  }
  //with each call decrement the sheep by one
  return `${sheep} - Another sheep jumped over the fence.` + sheepCount(sheep-1);
}
sheepCount(3);
  
//iterative
function sheepCountIt(sheep){
  for(let i=sheep; i>0; i--){
    return(`${i} - Another sheep jumped over the fence.`);
  }
}
sheepCountIt(3);