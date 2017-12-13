// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

function reverse(str) {
  let reversed = '';
  // for of loop
  for (let character of str) {
    reversed = character + reversed;
    // debugger;
  }

  return reversed;
}

// function reverse(str) {
//   debugger;
//   return str.split('').reduce((reversed, char) => char + reversed, '');
// }
//
reverse('asdf');

module.exports = reverse;


// use debugger
// inside exercise directory node inspect index.js
// run c to continue execution or repl to be in js console
