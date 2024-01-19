const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const words = {
  A: 'Apple',
  B: 'Ball',
  C: 'Cat',
  D: 'Dog',
  E: 'Elephant',
  F: 'Fish',
  G: 'Giraffe',
  H: 'Horse',
  I: 'Ice Cream',
  J: 'Jellyfish',
  K: 'Kite',
  L: 'Lion',
  M: 'Monkey',
  N: 'Nest',
  O: 'Orange',
  P: 'Penguin',
  Q: 'Queen',
  R: 'Rainbow',
  S: 'Sun',
  T: 'Train',
  U: 'Umbrella',
  V: 'Van',
  W: 'Watermelon',
  X: 'Xylophone',
  Y: 'Yo-Yo',
  Z: 'Zebra',
};

document.addEventListener('DOMContentLoaded', function () {
  const alphabetContainer = document.getElementById('alphabet-container');
  const wordContainer = document.getElementById('word-container');

  // Dynamically generate alphabet buttons
  for (let letter of alphabets) {
    const alphabetButton = document.createElement('div');
    alphabetButton.className = 'alphabet';
    alphabetButton.textContent = letter;
    alphabetButton.addEventListener('click', function () {
      displayWord(letter);
    });
    alphabetContainer.appendChild(alphabetButton);
  }

  // Display word for the selected alphabet
  function displayWord(alphabet) {
    const word = words[alphabet];
    wordContainer.textContent = `Word for ${alphabet}: ${word}`;
  }
});
