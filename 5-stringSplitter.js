// String Splitter
// Split a string based upon a separator (similar to String.prototype.split).

//recursive
function stringSplitter(string, separator){
  if(string.length===0){
    return[];
  }
  if(string.indexOf(separator)=== -1){
    return[string];
  }
  if(separator===''){
    return [string[0], ...stringSplitter(string.slice(1), separator)];
  }
  return [string.slice(0, string.indexOf(separator)), ...stringSplitter(string.slice(string.indexOf(separator)+1), separator)];
}
console.log(stringSplitter('Jennifer Colna', ''));

//iterative
function stringSplitterIt(string, separator){
  let arr = [];
  let index = string.indexOf(separator);

  for(let i=0; i< string.length; i++){
    if(string.charAt(i)===separator){
      arr.push(string.slice(0, index));
      arr.push(string.slice(index+1));
    }
    if(separator===''){
      arr.push(string[i]);
    }
  }
  return arr; 
}
console.log(stringSplitterIt('happy-days', ''));