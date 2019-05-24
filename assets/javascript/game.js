// alert("Its linked, you idiot");

//  Make an array of words
const word = ['suzuki', 'yamaha', 'kawasaki', 'evo', 'supra', 'sti', 'triumph', 'ducati', 'miata', 'mr2'];

//  Choose random word
let randNum = Math.floor(Math.random() * word.length);
let chosenWord = word[randNum];
let underScore = [];

//  Create underscores based on length of word
let createUnderscore = () => {
    for (let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

console.log(createUnderscore());

//  Check if guess is right
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);
    console.log(chosenWord.indexOf(keyword));
    if (keyword.indexOf(chosenWord) > -1) {
        console.log(true);
    }
});


//  If guess is right, push to correct array

//  If wrong, push to wrong array