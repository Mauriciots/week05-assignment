/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. 
The following code block will describe all the casing styles to support. We may also receive an array of casing styles, 
and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. 
Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function(input, caze) {
  const title = (str) => str.split(' ').reduce(
    (prev, curr) => [...prev, curr[0].toUpperCase() + curr.slice(1, curr.length)], []
  ).join(' ');

  const pascal = (str) => title(str).split(' ').join('');

  const camel = (str) => {
    const pascalStr = pascal(str);
    return pascalStr[0].toLowerCase() + pascalStr.slice(1, pascalStr.length);
  }

  const snake = (str) => str.split(' ').join('_');

  const kebab = (str) => str.split(' ').join('-');

  const isVowel = (s) => ['a', 'e', 'i', 'o', 'u'].includes(s);

  const vowel = (str) => str.split('').map(s => isVowel(s) ? s.toUpperCase() : s.toLowerCase()).join('');

  const consonant = (str) => str.split('').map(s => !isVowel(s) ? s.toUpperCase() : s.toLowerCase()).join('');

  const upper = (str) => str.toUpperCase();

  const lower = (str) => str.toLowerCase();

  const cazeArray = typeof caze === 'string' ? [caze] : caze;
  return cazeArray.reduce((result, option) => {
    const fn = { camel, pascal, snake, kebab, title, vowel, consonant, upper, lower }[option];
    return fn ? fn(result) : result;
  }, input)
}

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING
console.log(makeCaze("this is a string", ["kebab", "upper"]));
console.log(makeCaze("this is a string", ["kebab", "vowel"]));

