let random=parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1

let playGame=true;
if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess=parseInt(userInput.value)
    validateGuess(guess)
  })
}
function validateGuess(guess){
  if(guess<=0 || guess>100|| isNaN(guess)){
    console.log(`Kindly enter a valid number between 0-100`)
  }
  else {
    prevGuess.push(guess)
    if(numGuess===11){
      displayGuess(guess)
      displayMessage(`game over.random number was ${random}`)
      endGame()
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }

  }
}
function checkGuess(guess){
 if(guess===random){
     displayMessage(`you guessed it right`)
     endGame()
 }
 else if(guess>random){
   displayMessage(`number is too high`);
 }
 else if(guess<random)
 displayMessage(`Number is too short `);
}


function displayGuess(guess){
  userInput.value=''
  guessSlot.innerHTML+=`${guess},   `
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`
}
function displayMessage(message){
   lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
   userInput.value=''
   userInput.setAttribute('disabled','')
   p.classList.add('button')
   p.innerHTML=`<h2 id="newGame">start new game</h2>`;
   startOver.appendChild(p)
   playGame=false
   newGame()
    
}
function newGame(){
  const newGameButton=document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
      random=parseInt(Math.random()*100+1);
      prevGuess=[]
      numGuess=1;
      guessSlot.innerHTML=''
      remaining.innerHTML=`${11-numGuess}`;
      userInput.removeAttribute('disabled')
      startOver.removeChild(p)
      playGame=true;
  })

}