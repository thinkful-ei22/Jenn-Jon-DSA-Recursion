// Anagrams
// An anagram is any word or phrase that exactly reproduces the letters in another order. Write a function that creates an anagram (listing all the rearrangements of a word) of a given word. For example, if the user types east, the program should list all 24 permutations, including eats, etas, teas, and non-words like tsae.

// Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. For example, given east, use e as a prefix and you would place e in front of all six permutations of ast — ast, ats, sat, sta, tas, and tsa. This will give you the words east, eats, esat, esta, etas, and etsa. Continue this way until you find all the anagrams for east. There should be 24 of them.


function anagrams(prefix, str) {
  console.log('Prefix:',prefix);
  if(str.length <= 1) {
    console.log(`The anagram is ${prefix}${str}`);
  } else {
    for(let i=0; i<str.length; i++) {
      console.log('i',i);
      let current = str.substring(i, i+1);
      console.log('Curr', current);
      let previous = str.substring(0, i);
      console.log('Prev', previous);
      let afters = str.substring(i+1);
      console.log('Aft',afters);
      anagrams(prefix+current, previous+afters);
    }
  }
}
  
function _anagrams(word) {
  anagrams('', word);
}
  
_anagrams('hey');
