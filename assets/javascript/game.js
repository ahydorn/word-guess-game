// alert("Its linked, you idiot");

//  Make an array of words
const word = ['suzuki', 'yamaha', 'kawasaki', 'evo', 'supra', 'sti', 'triumph', 'ducati', 'miata', 'mr2'];

//  Choose random word
let randNum = Math.floor(Math.random() * word.length);
let chosenWord = word[randNum];
let rightWord = [];
let wrongWord = [];
let underscore = [];
let wrongGuesses = 0;

//  Dom manip
let docUnderscore = document.getElementsByClassName('underscore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');

//  Create underscores based on length of word
let generateUnderscore = () => {
    for (let i = 0; i < chosenWord.length; i++) {
        underscore.push('_');
    }
    return underscore;
}

//  Listen for guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);



    //  If user guess is right
    if (chosenWord.indexOf(keyword) > -1) {

        //  Add to right words array
        rightWord.push(keyword);

        //  Replace underscore with correct letter after guess
        underscore[chosenWord.indexOf(keyword)] = keyword;
        docUnderscore[0].innerHTML = underscore.join(' ');
        docRightGuess[0].innerHTML = rightWord;

        //  Does user's word match?
        if (underscore.join('') === chosenWord) {
            alert('Winner!');
        }
    } else {
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord;
    }

    // If guess is wrong
    // wrongGuesses++
    // If wrongGuesses = 7, alert "You lose!"


});

// TODO //
// Start players with 7 incorrect guesses
// guessesRemaining-- on wrongGuess only
// End game after 7 guesses




docUnderscore[0].innerHTML = generateUnderscore().join('_');