/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert 
these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

const camelCase = function(input) {
  const words = input.split(' ');
  let result = words[0];
  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    result += word[0].toUpperCase() + word.slice(1, word.length);
  }
  return result;
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy cornerstone")); //loopyCornerstone
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious

