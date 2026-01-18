//imports
import { CardList, BirdChoices as birdChoices } from './cards.js';

// =============================
// Handles to DOM elements
// =============================
const audioObject = document.getElementById('audioObject');
const choicesContainer = document.getElementById('choicesContainer');
const feedback = document.getElementById('feedback');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const restartBtn = document.getElementById('restartBtn');
const statTotal = document.getElementById('statTotal');
const statCorrect = document.getElementById('statCorrect');
const statIncorrect = document.getElementById('statIncorrect');
const statAccuracy = document.getElementById('statAccuracy');
const statStreak = document.getElementById('statStreak');
const statBest = document.getElementById('statBest');
const queueList = document.getElementById('queueList');
const nameOrCodeRadios = document.querySelectorAll('input[name="nameOrCode"]');
const autoPlay = document.getElementById('autoPlay');
const birdSelectionRadios = document.querySelectorAll('input[name="birdSelection"]');
const trainingMode = document.getElementById('trainingMode');


// =============================
// Initialize card list
// =============================

//Cards with all focus and non-focus birds
let cards = []
let cardsAllBirds = [...CardList];

//Cards with only focus species
let cardsFocusOnly = [];
cardsAllBirds.forEach(b => {
  if(b.focusSpecies === true) {
    cardsFocusOnly.push(b);
  }
})

//Cards with only non-focus species
let cardsNonFocusOnly = [];
cardsAllBirds.forEach(b => {
  if(b.focusSpecies !== true) {
    cardsNonFocusOnly.push(b);
  }
})

// =============================
// Initialize queue
// =============================
let queue = shuffleArray(cards.map(c => c.id));
let currentIndex = 0;
let queueData = [];
resetQueueData();

// =============================
// Initialize Audio object for playback
// =============================
let audio = new Audio();
audio.controls = true;
audioObject.appendChild(audio);

// =============================
// Initialize defaults
// =============================
let stats = {
  total: 0,
  correct: 0,
  incorrect: 0,
  streak: 0,
  bestStreak: 0
};
// init answer items
let answeredThisCard = false;
let useNameOrCodes = 'useNames';
let birdSelection = 'focus';

//init the cards population
birdSelectionOnChangeHandler(null,birdSelection); //using this handler to keep things DRY


// =============================
// Event listeners
// =============================
prevBtn.addEventListener('click', goPrev);
nextBtn.addEventListener('click', goNext);
shuffleBtn.addEventListener('click', () => { queue = shuffleArray(queue); currentIndex = 0; animateButton(shuffleBtn); animateQueueList(); resetQueueData(); renderQueue(); loadCurrentCard(); });
restartBtn.addEventListener('click', restartSession);
audio.addEventListener('ended', () => { });

// listen for key presses for play/pause, and moving to next or previous card
document.addEventListener('keydown', (e) => {
  //Space: toggle audio playback
  if (e.code === 'Space' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
    e.preventDefault();
    togglePlay();
  }

  //Right Arrow or D: go to next card
  if ( (e.code === 'ArrowRight' || e.code === 'KeyD') && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
    e.preventDefault();
    goNext();
  }

  //Left Arrow or A: go to previous card
  if ( (e.code === 'ArrowLeft' || e.code === 'KeyA') && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
    e.preventDefault();
    goPrev();
  }
});

//handle switch between Name and Code option
nameOrCodeRadios.forEach(radio => {
  radio.addEventListener("change", function(){
    //switch to the new option
    useNameOrCodes = radio.value;

    //update the interface
    loadCurrentCard();
    renderQueue();
  });
});

//Handle bird population selection change
birdSelectionRadios.forEach(radio => {
  radio.addEventListener("change", function (event) {
    birdSelectionOnChangeHandler(event,radio.value);
  });
});
function birdSelectionOnChangeHandler(event, bSel) {  
  birdSelection = bSel;

  if(birdSelection === 'all') {
    cards = structuredClone(cardsAllBirds);     
  } else if(birdSelection === 'focus') {
    cards = structuredClone(cardsFocusOnly);
  } else if(birdSelection === 'nonFocus') {
    cards = structuredClone(cardsNonFocusOnly);
  }

  queue = shuffleArray(cards.map(c => c.id));
  currentIndex = 0;

  animateQueueList();
  resetQueueData();
  loadCurrentCard();  
  renderQueue();
}

//Handle training mode change
trainingMode.addEventListener('change', function() {
  // the two functions below look at the checkbox status to determine display
  // all that's needed is to call them and let them do their thing
  loadCurrentCard();
  renderQueue();
});


// =============================
// Functions
// =============================

//Loads the current card in preparation for the user's guess
function loadCurrentCard() {
  //reset indicators and feedback
  answeredThisCard = false;
  feedback.innerHTML = '&nbsp;';
  feedback.className = '';
  if (queue.length === 0) {
    choicesContainer.innerHTML = '';
    return;
  }
  //card tracking
  const cardId = queue[currentIndex % queue.length];
  const card = cards.find(c => c.id === cardId);
  if (!card) return;
  //prep audio clip
  audio.src = card.audioUrl;
  audio.load();
  //show on UI
  renderChoices(card);
}

//Render the choice options to the UI
function renderChoices(card) {
  //reset the choices
  choicesContainer.innerHTML = '';

  //loop through all the options and display the guess options that match the current mode
  birdChoices.forEach(bird => {
    //show focus, non-focus, or all birds
    if(  (birdSelection==='all') 
      || (birdSelection==='focus' && bird.focusSpecies === true)
      || (birdSelection==='nonFocus' && bird.focusSpecies === false)
    ) {
      //create new element
      const btn = document.createElement('button');
      //add the appropriate css classes
      if (bird.focusSpecies === true) {
        btn.className = `choice focus ${bird.code}`;
      } else if (bird.focusSpecies === false) {
        btn.className = `choice not-focus ${bird.code}`;
      } else {
        btn.className = `choice ${bird.code}`;
      }

      btn.type = 'button';

      //set the label as appropriate for current options
      if(useNameOrCodes==='useNames') {
        btn.textContent = bird.name;
      } else if(useNameOrCodes==='useCodes') {
        btn.textContent = bird.code;
      }
      
      //add click listener
      btn.addEventListener('click', () => handleChoice(card, bird.code, btn));

      //add this button to the DOM
      choicesContainer.appendChild(btn);    
    }        
  })
  renderQueue()
}

//Handle when the user makes a guess
function handleChoice(card, selected, btnEl) {
  //make sure we ignore multiple guesses
  if (answeredThisCard) {
    return;
  }

  //This is the first guess, flag it and update stats
  answeredThisCard = true;
  stats.total += 1;
  queueData[currentIndex].guesses += 1;
    
  //Was it answered correctly?
  if (selected === card.answerCode) {
    //update stats
    stats.correct += 1;
    stats.streak += 1;
    stats.bestStreak = Math.max(stats.bestStreak, stats.streak);
    //add visual feedback 
    btnEl.classList.add('correct');
    feedback.textContent =`Correct! ${card.answerName} (${card.answerCode})`;
    feedback.style.color = '';
    feedback.className = 'correct';
    //update queue card stats
    queueData[currentIndex].correct += 1;
  
  //Was it answered incorrectly?
  } else {
    //update stats
    stats.incorrect += 1;
    stats.streak = 0;
    btnEl.classList.add('incorrect');
    // highlight correct choice    
    document.getElementsByClassName(card.answerCode)[0].classList.add('correct')
    //add visual feedback 
    feedback.textContent = `Incorrect. Correct answer: ${card.answerName} (${card.answerCode})`;
    feedback.style.color = '';
    feedback.className = 'incorrect';
    //update queue card stats
    queueData[currentIndex].incorrect += 1;
  }

  //Make feedback visible in UI
  updateStatsDisplay();
  renderQueue()
}

//Toggles the playback of the audio clip
function togglePlay() {
  //ensure the audio DOM object is available
  if (!audio.src) {
    return;
  }

  //toggle play/pause
  if (audio.paused) {
    audio.play().catch(err => {
      feedback.textContent = 'Playback failed. Try a different file or allow autoplay.'; //generic message
    });
  } else {
    audio.pause();
  }
}

//Go to the next card in the queue
function goNext() {
  //make sure there's something in queue
  if (queue.length === 0) return;

  //Increment index counter. Loop to first card if off the end
  currentIndex = (currentIndex + 1) % queue.length;
  loadCurrentCard();

  //autoplay if enabled
  if(autoPlay.checked) {
    audio.pause();
    audio.play();
  }

  //show that button was clicked (helpful when using key shortcuts)
  animateButton(nextBtn);
}


//Go to the previous card in the queue
function goPrev() {
  //make sure there's something in queue
  if (queue.length === 0) return;

  //Increment index counter. Loop to first card if off the end
  currentIndex = (currentIndex - 1 + queue.length) % queue.length;
  loadCurrentCard();

  //autoplay if enabled
  if(autoPlay.checked) {
    audio.pause();
    audio.play();
  }

  //show that button was clicked (helpful when using key shortcuts)
  animateButton(prevBtn);
}

//Clear everything and start over
function restartSession() {
  //Make sure user really wants to
  if( confirm("Are you sure you want to reset all session statistics?") ) {

    //show that button was pressed and that the queue is reset
    animateButton(restartBtn);
    animateQueueList();

    //reset stats and defaults then reload the interface
    stats = { total: 0, correct: 0, incorrect: 0, streak: 0, bestStreak: 0 };
    queue = cards.map(c => c.id);
    queue = shuffleArray(queue);
    currentIndex = 0;
    audio.pause();
    audio.currentTime = 0;
    updateStatsDisplay();
    loadCurrentCard();
    resetQueueData();
    renderQueue();
    feedback.textContent = 'Session restarted.';
  }
}

// Display the Statistics in the UI
function updateStatsDisplay() {
  statTotal.textContent = stats.total;
  statCorrect.textContent = stats.correct;
  statIncorrect.textContent = stats.incorrect;
  const accuracy = stats.total ? Math.round((stats.correct / stats.total) * 100) : 0;
  statAccuracy.textContent = accuracy + '%';
  statStreak.textContent = stats.streak;
  statBest.textContent = stats.bestStreak;
}


// Display the current queue to the UI
function renderQueue() {
 
  //clear queue contents
  queueList.innerHTML = '';
  
  //create new cards
  for(let i=0; i<queue.length; ++i) {    
    //load data
    let curCard = cards.find(c => { return c.id===queue[i]})

    //create display element and add appropriate classes
    let qc = document.createElement('div');
    qc.classList.add('queueCard');
    i==currentIndex ? qc.classList.add('currentCard') : null;
    queueData[i].correct>0 ? qc.classList.add('cardCorrect') : null
    queueData[i].incorrect>0 ? qc.classList.add('cardIncorrect') : null;

    //set appropriate card label
    qc.textContent = trainingMode.checked ? curCard.title : i+1;

    //attach a click event so that the user can go directly to that card
    qc.addEventListener('click',() => { 
      currentIndex=i;
      loadCurrentCard(); 
      if(autoPlay.checked) {
        audio.pause();
        audio.play();
      }
    });  

    // attach this card to DOM
    queueList.appendChild(qc);
  }  
}

//Reset the data that keeps track of the card guesses stats
function resetQueueData() {
  //clear queue data array
  queueData = null;
  queueData = [];

  //rebuild the data with defaults
  for ( let i=0; i<queue.length; ++i ) {
    queueData.push({guesses:0,correct:0,incorrect:0});
  }
}

//Show a visual indication that queuewas reset
//Essentially just attaching a CSS class that plays a CSS animation
function animateQueueList() {
  queueList.classList.remove("queueShuffleAnim");  
  void queueList.offsetWidth; //silly CSS voodoo to allow the animation to be initiated more than once...
  queueList.classList.add("queueShuffleAnim");
}

//Show a visual indication that button was pressed
//Essentially just attaching a CSS class that plays a CSS animation
function animateButton(el) {
  el.classList.remove("buttonClickAnim");  
  void el.offsetWidth; //silly CSS voodoo to allow the animation to be initiated more than once...
  el.classList.add("buttonClickAnim");
}

// Some implimentation of Fisher-Yates shuffle for shuffling array...
// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


// =============================
// kick off the app
// =============================
renderQueue();
loadCurrentCard();
updateStatsDisplay();