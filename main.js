//imports
import { CardList, BirdChoices as birdChoices } from './cards.js';

// Handles to DOM elements
// =============================
// const playBtn = document.getElementById('playBtn'); //playBtn was replaced with built-in controls of the Audio object in the interface
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
// const includeNonFocus = document.getElementById('includeNonFocus');
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

let queue = shuffleArray(cards.map(c => c.id));
let currentIndex = 0;
let queueData = [];
resetQueueData();

//init Audio object for playback
let audio = new Audio();
audio.controls = true;
audioObject.appendChild(audio);

//init stats
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
birdSelectionOnChangeHandler(null,birdSelection);

// =============================
// kick off the  app
// =============================
renderQueue();
loadCurrentCard();


// =============================
// Event listeners
// =============================
// playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', goPrev);
nextBtn.addEventListener('click', goNext);
shuffleBtn.addEventListener('click', () => { queue = shuffleArray(queue); currentIndex = 0; animateButton(shuffleBtn); animateQueueList(); resetQueueData(); renderQueue(); loadCurrentCard(); });
restartBtn.addEventListener('click', restartSession);
audio.addEventListener('ended', () => { });

// listen for spacebar key to Play/Pause audio
document.addEventListener('keydown', (e) => {
  //Space: toggle audio playback
  if (e.code === 'Space' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
    e.preventDefault();
    togglePlay();
  }

  //Right Arrow: go to next card
  if ( (e.code === 'ArrowRight' || e.code === 'KeyD') && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
    e.preventDefault();
    goNext();
  }

  //Left Arrow: go to next card
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
  loadCurrentCard();
  renderQueue();
});


// =============================
// Functions
// =============================
function loadCurrentCard() {
  answeredThisCard = false;
  feedback.innerHTML = '&nbsp;';
  feedback.className = '';
  if (queue.length === 0) {
    choicesContainer.innerHTML = '';
    // playBtn.disabled = true;
    return;
  }
  // playBtn.disabled = false;
  const cardId = queue[currentIndex % queue.length];
  const card = cards.find(c => c.id === cardId);
  if (!card) return;
  audio.src = card.audioUrl;
  audio.load();
  renderChoices(card);
}

function renderChoices(card) {
  choicesContainer.innerHTML = '';

  birdChoices.forEach(bird => {
    //show focus, non-focus, or all birds
    if( (birdSelection==='all') || (birdSelection==='focus' && bird.focusSpecies === true) || (birdSelection==='nonFocus' && bird.focusSpecies === false) ) {
      const btn = document.createElement('button');
      if (bird.focusSpecies === true) {
        btn.className = `choice focus ${bird.code}`;
      } else if (bird.focusSpecies === false) {
        btn.className = `choice not-focus ${bird.code}`;
      } else {
        btn.className = `choice ${bird.code}`;
      }
      btn.type = 'button';
      if(useNameOrCodes==='useNames') {
        btn.textContent = bird.name;
      } else if(useNameOrCodes==='useCodes') {
        btn.textContent = bird.code;
      }
      
      // btn.textContent = bird.code;
      btn.addEventListener('click', () => handleChoice(card, bird.code, btn));
      choicesContainer.appendChild(btn);    
    }        
  })
  renderQueue()
}

function handleChoice(card, selected, btnEl) {
  if (answeredThisCard) return;

  answeredThisCard = true;

  stats.total += 1;

  queueData[currentIndex].guesses += 1;

  
  //Correctly answered
  if (selected === card.answerCode) {
    stats.correct += 1;
    stats.streak += 1;
    stats.bestStreak = Math.max(stats.bestStreak, stats.streak);
    btnEl.classList.add('correct');
    feedback.textContent =`Correct! ${card.answerName} (${card.answerCode})`;
    feedback.style.color = '';
    feedback.className = 'correct';
    queueData[currentIndex].correct += 1;
  
    //Incorrectly Answered
  } else {
    stats.incorrect += 1;
    stats.streak = 0;
    btnEl.classList.add('incorrect');

    // highlight correct choice    
    document.getElementsByClassName(card.answerCode)[0].classList.add('correct')

    feedback.textContent = `Incorrect. Correct answer: ${card.answerName} (${card.answerCode})`;
    feedback.style.color = '';
    feedback.className = 'incorrect';
    queueData[currentIndex].incorrect += 1;
  }
  updateStatsDisplay();
  renderQueue()
}

function togglePlay() {
  if (!audio.src) return;
  if (audio.paused) {
    audio.play().catch(err => {
      feedback.textContent = 'Playback failed. Try a different file or allow autoplay.';
    });
  } else {
    audio.pause();
  }
}

function goNext() {
  if (queue.length === 0) return;
  currentIndex = (currentIndex + 1) % queue.length;
  loadCurrentCard();
  if(autoPlay.checked) {
    audio.pause();
    audio.play();
  }
  animateButton(nextBtn);
}

function goPrev() {
  if (queue.length === 0) return;
  currentIndex = (currentIndex - 1 + queue.length) % queue.length;
  loadCurrentCard();
  if(autoPlay.checked) {
    audio.pause();
    audio.play();
  }
  animateButton(prevBtn);
}

function animateButton(el) {
  el.classList.remove("buttonClickAnim");  
  void el.offsetWidth;
  el.classList.add("buttonClickAnim");
}

function restartSession() {
  if( confirm("Are you sure you want to reset all session statistics?") ) {

    animateButton(restartBtn);
    animateQueueList();

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

function animateQueueList() {
  queueList.classList.remove("queueShuffleAnim");  
  void queueList.offsetWidth;
  queueList.classList.add("queueShuffleAnim");
}

function updateStatsDisplay() {
  statTotal.textContent = stats.total;
  statCorrect.textContent = stats.correct;
  statIncorrect.textContent = stats.incorrect;
  const accuracy = stats.total ? Math.round((stats.correct / stats.total) * 100) : 0;
  statAccuracy.textContent = accuracy + '%';
  statStreak.textContent = stats.streak;
  statBest.textContent = stats.bestStreak;
}

function renderQueue() {
 
  //clear queue contents
  queueList.innerHTML = '';
  
  //create new cards
  for(let i=0; i<queue.length; ++i) {    
    let curCard = cards.find(c => { return c.id===queue[i]})

    let cardIncorrectClass = queueData[i].incorrect>0 ? 'cardIncorrect' : '';
    let qc = document.createElement('div');
    qc.classList.add('queueCard');
    i==currentIndex ? qc.classList.add('currentCard') : null;
    queueData[i].correct>0 ? qc.classList.add('cardCorrect') : null
    queueData[i].incorrect>0 ? qc.classList.add('cardIncorrect') : null;

    qc.textContent = trainingMode.checked ? curCard.title : i+1;

    qc.addEventListener('click',() => { 
      currentIndex=i;
      loadCurrentCard(); 
      if(autoPlay.checked) {
        audio.pause();
        audio.play();
      }
    });  

    queueList.appendChild(qc);
  }  
}

function resetQueueData() {


  //clear array
  queueData = null;
  queueData = [];

  //rebuild
  for ( let i=0; i<queue.length; ++i ) {
    queueData.push({guesses:0,correct:0,incorrect:0});
  }
}

// Fisher-Yates shuffle for shuffling array
function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


// Initialize stats display
updateStatsDisplay();

//Deal with Info modal display
function toggleInfo(event) {
  if(infoContainer.style.visibility === 'visible') {
    infoContainer.style.visibility = 'hidden';
  } else {
    infoContainer.style.visibility = 'visible';
  }

}