//==============================================================================
//Build the Data Structures:
//==============================================================================

// Build the cards with all focus and non-focus species
const CardList = [];

// The following loops are dependent on the naming scheme and location of the training clips
// The filename format is the standard 4-character code, and underscore, and a two digit count value for that bird
// For example, the Black-capped Chickadee's code is BCCH and there are 3 clips. So this file needs to load:
//    - BCCH_01.mp3
//    - BCCH_02.mp3
//    - BCCH_03.mp3
// The code's used can be found here: https://www.birdpop.org/docs/misc/Alpha_codes_eng.pdf

//BBWA
for(let i=1; i<=2; ++i){ CardList.push({ id: crypto.randomUUID(), title: `BBWA ${i}`, audioUrl: `./clips_vce/BBWA_0${i}.mp3`, answerCode: "BBWA", answerName: "Bay-breasted Warbler", type:"song", focusSpecies: false })}
//BCCH
for(let i=1; i<=1; ++i){ CardList.push({ id: crypto.randomUUID(), title: `BCCH ${i}`, audioUrl: `./clips_vce/BCCH_0${i}.mp3`, answerCode: "BCCH", answerName: "Black-capped Chickadee", type:"song", focusSpecies: true })}
for(let i=2; i<=3; ++i){ CardList.push({ id: crypto.randomUUID(), title: `BCCH ${i}`, audioUrl: `./clips_vce/BCCH_0${i}.mp3`, answerCode: "BCCH", answerName: "Black-capped Chickadee", type:"call", focusSpecies: true })}
//BITH
for(let i=1; i<=3; ++i){ CardList.push({ id: crypto.randomUUID(), title: `BITH ${i}`, audioUrl: `./clips_vce/BITH_0${i}.mp3`, answerCode: "BITH", answerName: "Bicknell’s Thrush", type:"song", focusSpecies: true })}
for(let i=4; i<=5; ++i){ CardList.push({ id: crypto.randomUUID(), title: `BITH ${i}`, audioUrl: `./clips_vce/BITH_0${i}.mp3`, answerCode: "BITH", answerName: "Bicknell’s Thrush", type:"call", focusSpecies: true })}
//BLPW
for(let i=1; i<=3; ++i){ CardList.push({ id: crypto.randomUUID(), title: `BLPW ${i}`, audioUrl: `./clips_vce/BLPW_0${i}.mp3`, answerCode: "BLPW", answerName: "Blackpoll Warbler", type:"song", focusSpecies: true })}
for(let i=4; i<=4; ++i){ CardList.push({ id: crypto.randomUUID(), title: `BLPW ${i}`, audioUrl: `./clips_vce/BLPW_0${i}.mp3`, answerCode: "BLPW", answerName: "Blackpoll Warbler", type:"call", focusSpecies: true })}
//BOCH
for(let i=1; i<=2; ++i){ CardList.push({ id: crypto.randomUUID(), title: `BOCH ${i}`, audioUrl: `./clips_vce/BOCH_0${i}.mp3`, answerCode: "BOCH", answerName: "Boreal Chickadee", type:"call", focusSpecies: true })}
//CMWA
for(let i=1; i<=1; ++i){ CardList.push({ id: crypto.randomUUID(), title: `CMWA ${i}`, audioUrl: `./clips_vce/CMWA_0${i}.mp3`, answerCode: "CMWA", answerName: "Cape May Warbler", type:"song", focusSpecies: false })}
//DEJU
for(let i=1; i<=2; ++i){ CardList.push({ id: crypto.randomUUID(), title: `DEJU ${i}`, audioUrl: `./clips_vce/DEJU_0${i}.mp3`, answerCode: "DEJU", answerName: "Dark-eyed Junco", type:"song", focusSpecies: false })}
//FOSP
for(let i=1; i<=1; ++i){ CardList.push({ id: crypto.randomUUID(), title: `FOSP ${i}`, audioUrl: `./clips_vce/FOSP_0${i}.mp3`, answerCode: "FOSP", answerName: "Fox Sparrow", type:"song", focusSpecies: true })}
for(let i=2; i<=2; ++i){ CardList.push({ id: crypto.randomUUID(), title: `FOSP ${i}`, audioUrl: `./clips_vce/FOSP_0${i}.mp3`, answerCode: "FOSP", answerName: "Fox Sparrow", type:"call", focusSpecies: true })}
//HETH
for(let i=1; i<=3; ++i){ CardList.push({ id: crypto.randomUUID(), title: `HETH ${i}`, audioUrl: `./clips_vce/HETH_0${i}.mp3`, answerCode: "HETH", answerName: "Hermit Thrush", type:"song", focusSpecies: true })}
for(let i=4; i<=5; ++i){ CardList.push({ id: crypto.randomUUID(), title: `HETH ${i}`, audioUrl: `./clips_vce/HETH_0${i}.mp3`, answerCode: "HETH", answerName: "Hermit Thrush", type:"call", focusSpecies: true })}
//LEFL
for(let i=1; i<=1; ++i){ CardList.push({ id: crypto.randomUUID(), title: `LEFL ${i}`, audioUrl: `./clips_vce/LEFL_0${i}.mp3`, answerCode: "LEFL", answerName: "Least Flycatcher", type:"song", focusSpecies: false })}
//LISP
for(let i=1; i<=1; ++i){ CardList.push({ id: crypto.randomUUID(), title: `LISP ${i}`, audioUrl: `./clips_vce/LISP_0${i}.mp3`, answerCode: "LISP", answerName: "Lincoln's Sparrow", type:"song", focusSpecies: false })}
//RCKI
for(let i=1; i<=1; ++i){ CardList.push({ id: crypto.randomUUID(), title: `RCKI ${i}`, audioUrl: `./clips_vce/RCKI_0${i}.mp3`, answerCode: "RCKI", answerName: "Ruby-crowned Kinglet", type:"song", focusSpecies: false })}
//RESQ
for(let i=1; i<=3; ++i){ CardList.push({ id: crypto.randomUUID(), title: `RESQ ${i}`, audioUrl: `./clips_vce/RESQ_0${i}.mp3`, answerCode: "RESQ", answerName: "Red Squirrel", type:"call", focusSpecies: true })}
//SWTH
for(let i=1; i<=2; ++i){ CardList.push({ id: crypto.randomUUID(), title: `SWTH ${i}`, audioUrl: `./clips_vce/SWTH_0${i}.mp3`, answerCode: "SWTH", answerName: "Swainson's Thrush", type:"song", focusSpecies: true })}
for(let i=3; i<=5; ++i){ CardList.push({ id: crypto.randomUUID(), title: `SWTH ${i}`, audioUrl: `./clips_vce/SWTH_0${i}.mp3`, answerCode: "SWTH", answerName: "Swainson's Thrush", type:"call", focusSpecies: true })}
//VEER
for(let i=1; i<=2; ++i){ CardList.push({ id: crypto.randomUUID(), title: `VEER ${i}`, audioUrl: `./clips_vce/VEER_0${i}.mp3`, answerCode: "VEER", answerName: "Veery", type:"song", focusSpecies: false })}
for(let i=3; i<=4; ++i){ CardList.push({ id: crypto.randomUUID(), title: `VEER ${i}`, audioUrl: `./clips_vce/VEER_0${i}.mp3`, answerCode: "VEER", answerName: "Veery", type:"call", focusSpecies: false })}
//WIWR
for(let i=1; i<=3; ++i){ CardList.push({ id: crypto.randomUUID(), title: `WIWR ${i}`, audioUrl: `./clips_vce/WIWR_0${i}.mp3`, answerCode: "WIWR", answerName: "Winter Wren", type:"song", focusSpecies: true })}
for(let i=4; i<=4; ++i){ CardList.push({ id: crypto.randomUUID(), title: `WIWR ${i}`, audioUrl: `./clips_vce/WIWR_0${i}.mp3`, answerCode: "WIWR", answerName: "Winter Wren", type:"call", focusSpecies: true })}
//WTSP
for(let i=1; i<=1; ++i){ CardList.push({ id: crypto.randomUUID(), title: `WTSP ${i}`, audioUrl: `./clips_vce/WTSP_0${i}.mp3`, answerCode: "WTSP", answerName: "White-throated Sparrow", type:"song", focusSpecies: true })}
for(let i=2; i<=2; ++i){ CardList.push({ id: crypto.randomUUID(), title: `WTSP ${i}`, audioUrl: `./clips_vce/WTSP_0${i}.mp3`, answerCode: "WTSP", answerName: "White-throated Sparrow", type:"call", focusSpecies: true })}
//YBFL
for(let i=1; i<=1; ++i){ CardList.push({ id: crypto.randomUUID(), title: `YBFL ${i}`, audioUrl: `./clips_vce/YBFL_0${i}.mp3`, answerCode: "YBFL", answerName: "Yellow-bellied Flycatcher", type:"song", focusSpecies: true })}
for(let i=2; i<=2; ++i){ CardList.push({ id: crypto.randomUUID(), title: `YBFL ${i}`, audioUrl: `./clips_vce/YBFL_0${i}.mp3`, answerCode: "YBFL", answerName: "Yellow-bellied Flycatcher", type:"call", focusSpecies: true })}


// This is the list of the focus and sound-alike non-focus birds used in the app
// The guess options are built from this list
const birdChoices = [
    { focusSpecies: true,  code: "BITH", name: "Bicknell's Thrush" }
  , { focusSpecies: true,  code: "SWTH", name: "Swainson's Thrush" }
  , { focusSpecies: true,  code: "HETH", name: "Hermit Thrush" }
  , { focusSpecies: true,  code: "WTSP", name: "White-throated Sparrow" }
  , { focusSpecies: true,  code: "FOSP", name: "Fox Sparrow" }
  , { focusSpecies: true,  code: "WIWR", name: "Winter Wren" }
  , { focusSpecies: true,  code: "BLPW", name: "Blackpoll Warbler" }
  , { focusSpecies: true,  code: "BCCH", name: "Black-capped Chickadee" }
  , { focusSpecies: true,  code: "BOCH", name: "Boreal Chickadee" }
  , { focusSpecies: true,  code: "YBFL", name: "Yellow-bellied Flycatcher" }
  , { focusSpecies: true,  code: "RESQ", name: "Red Squirrel" }
  , { focusSpecies: false, code: "VEER", name: "Veery Thrush" }
  , { focusSpecies: false, code: "RCKI", name: "Ruby-crowned Kinglet" }
  , { focusSpecies: false, code: "CMWA", name: "Cape May Warbler" }
  , { focusSpecies: false, code: "BBWA", name: "Bay-breasted Warbler" }
  , { focusSpecies: false, code: "DEJU", name: "Dark-eyed Junco" }
  , { focusSpecies: false, code: "LISP", name: "Lincoln's Sparrow" }
  , { focusSpecies: false, code: "LEFL", name: "Least Flycatcher" }
];


//==============================================================================
// Impliment the app logic
//==============================================================================

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
const vocalizationTypeRadios = document.querySelectorAll('input[name="vocalizationType"]');
const trainingMode = document.getElementById('trainingMode');


// =============================
// Initialize card lists
// With the 3 species options and the 3 voclaization options, there are 9 lists to build
// =============================

//Cards with all focus and non-focus birds, songs and calls
let cards = []
let cardsAllBirdsSongsCalls = [...CardList];
//All birds, songs only
let cardsAllBirdsSongs = [];
cardsAllBirdsSongsCalls.forEach(b => {
  if(b.type.includes('song')) {
    cardsAllBirdsSongs.push(b);
  }
})
//All birds, calls only
let cardsAllBirdsCalls = [];
cardsAllBirdsSongsCalls.forEach(b => {
  if(b.type.includes('call')) {
    cardsAllBirdsCalls.push(b);
  }
})

//Cards with only focus species, songs and calls
let cardsFocusOnly = [];
cardsAllBirdsSongsCalls.forEach(b => {
  if(b.focusSpecies === true) {
    cardsFocusOnly.push(b);
  }
})
//Focus only, songs only
let cardsFocusOnlySongs = [];
cardsAllBirdsSongsCalls.forEach(b => {
  if(b.focusSpecies === true && b.type.includes('song')) {
    cardsFocusOnlySongs.push(b);
  }
})
//Focus only, calls only
let cardsFocusOnlyCalls = [];
cardsAllBirdsSongsCalls.forEach(b => {
  if(b.focusSpecies === true && b.type.includes('call')) {
    cardsFocusOnlyCalls.push(b);
  }
})

//Cards with only non-focus species, songs and calls
let cardsNonFocusOnly = [];
cardsAllBirdsSongsCalls.forEach(b => {
  if(b.focusSpecies !== true) {
    cardsNonFocusOnly.push(b);
  }
})
//Non-focus, songs only
let cardsNonFocusOnlySongs = [];
cardsAllBirdsSongsCalls.forEach(b => {
  if( b.focusSpecies !== true && b.type.includes('song') ) {
    cardsNonFocusOnlySongs.push(b);
  }
})
//Non-focus, calls only
let cardsNonFocusOnlyCalls = [];
cardsAllBirdsSongsCalls.forEach(b => {
  if( b.focusSpecies !== true && b.type.includes('call') ) {
    cardsNonFocusOnlyCalls.push(b);
  }
})



// =============================
// Initialize queue
// =============================

let queue;
let queueShuffled;
let queueSorted;
let currentIndex = 0;
let queueData = [];

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
let vocalizationType = 'songcall';

//init the cards population
birdSelectionOnChangeHandler(null,birdSelection); //using this handler to keep things DRY


// =============================
// Event listeners
// =============================
prevBtn.addEventListener('click', goPrev);
nextBtn.addEventListener('click', goNext);
shuffleBtn.addEventListener('click', () => { shuffleQueue(); currentIndex = 0; animateButton(shuffleBtn); animateQueueList(); resetQueueData(); renderQueue(); loadCurrentCard(); });
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

  setTheCardsVariable(); //determine which cards to use 

  shuffleQueue();

  currentIndex = 0;

  //update the interface
  animateQueueList();
  resetQueueData();
  loadCurrentCard();  
  renderQueue();
}

//handle switch between Vocalization Type options
vocalizationTypeRadios.forEach(radio => {
  radio.addEventListener("change", function(){
    //switch to the new option
    vocalizationType = radio.value;

    setTheCardsVariable(); //determine which cards to use 
    
    shuffleQueue();
    
    currentIndex = 0;

    //update the interface
    animateQueueList();
    resetQueueData();
    loadCurrentCard();
    renderQueue();
  });
});

//Handle training mode change
trainingMode.addEventListener('change', function() {
  // the two functions below look at the option values to determine display
  // all that's needed is to call them and let them do their thing
  renderQueue();
  loadCurrentCard();
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
  const card = cards.find(c => c.title === cardId);
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
  queueData[card.title].guesses += 1;
    
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
    queueData[card.title].correct += 1;
  
  //Was it answered incorrectly?
  } else {
    //update stats
    stats.incorrect += 1;
    stats.streak = 0;
    btnEl.classList.add('incorrect');
    // highlight correct choice    
    document.getElementsByClassName(card.answerCode)[0].classList.add('correct')
    //add visual feedback 
    feedback.textContent = `Incorrect.  Correct answer: ${card.answerName} (${card.answerCode})`;
    feedback.style.color = '';
    feedback.className = 'incorrect';
    //update queue card stats
    queueData[card.title].incorrect += 1;
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

  //Decrement index counter. Loop to last card if off the beginning
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
    queue = cards.map(c => c.title);
    shuffleQueue()
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

  //Set shuffled or sorted queue order
  if(trainingMode.checked) {
    queue = [...queueSorted];
  } else {
    queue = [...queueShuffled];
  }
  
  //create new cards
  for(let i=0; i<queue.length; ++i) {    
    //load data
    let curCard = cards.find(c => { return c.title===queue[i]})

    //create display element and add appropriate classes
    let qc = document.createElement('div');
    qc.classList.add('queueCard');
    i==currentIndex ? qc.classList.add('currentCard') : null;
    queueData[curCard.title].correct>0 ? qc.classList.add('cardCorrect') : null
    queueData[curCard.title].incorrect>0 ? qc.classList.add('cardIncorrect') : null;

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
  } //end: if vocalization is right type

}

//Reset the data that keeps track of the card guesses stats
function resetQueueData() {
  //clear queue data array
  queueData = null;
  queueData = [];

  //rebuild the data with defaults
  for ( let i=0; i<queue.length; ++i ) {
    queueData[queue[i]] = ({guesses:0,correct:0,incorrect:0});
  }
}

//Show a visual indication that queue was reset
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

// Looks at the bird selection and vocalization options to determine which cards to use
function setTheCardsVariable() {

  if(birdSelection==='all' && vocalizationType==='songcall') {
    cards = structuredClone(cardsAllBirdsSongsCalls); 
  } else if(birdSelection==='all' && vocalizationType==='song') {
    cards = structuredClone(cardsAllBirdsSongs); 
  } else if(birdSelection==='all' && vocalizationType==='call') {
    cards = structuredClone(cardsAllBirdsCalls);

  }  else if(birdSelection==='focus' && vocalizationType==='songcall') {
    cards = structuredClone(cardsFocusOnly);
  }  else if(birdSelection==='focus' && vocalizationType==='song') {
    cards = structuredClone(cardsFocusOnlySongs);
  }  else if(birdSelection==='focus' && vocalizationType==='call') {
    cards = structuredClone(cardsFocusOnlyCalls);

  }  else if(birdSelection==='nonFocus' && vocalizationType==='songcall') {
    cards = structuredClone(cardsNonFocusOnly);
  }  else if(birdSelection==='nonFocus' && vocalizationType==='song') {
    cards = structuredClone(cardsNonFocusOnlySongs);
  }  else if(birdSelection==='nonFocus' && vocalizationType==='call') {
    cards = structuredClone(cardsNonFocusOnlyCalls);
  }

}


//Shuffle the queue and store off supporting vars
function shuffleQueue() {
  queue = shuffleArray(cards.map(c => c.title));
  queueShuffled = [...queue]
  queueSorted = cards.map(c => c.title);
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