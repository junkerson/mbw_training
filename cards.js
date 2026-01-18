// Build the cards with all focus and non-focus species
export const CardList = [];

//BBWA Loop
for(let i=1; i<=2; ++i){
  CardList.push({
    id: crypto.randomUUID(),
    title: `BBWA ${i}`,
    audioUrl: `./clips_vce/BBWA_0${i}.mp3`,
    answerCode: "BBWA",
    answerName: "Bay-breasted Warbler",
    focusSpecies: false
  })
}

//BCCH loop
for(let i=1; i<=3; ++i){
  CardList.push({
    id: crypto.randomUUID(),
    title: `BCCH ${i}`,
    audioUrl: `./clips_vce/BCCH_0${i}.mp3`,
    answerCode: "BCCH",
    answerName: "Black-capped Chickadee",
    focusSpecies: true
  })
}

//BITH loop
for(let i=1; i<=5; ++i){
  CardList.push({
    id: crypto.randomUUID(),
    title: `BITH ${i}`,
    audioUrl: `./clips_vce/BITH_0${i}.mp3`,
    answerCode: "BITH",
    answerName: "Bicknell’s Thrush",
    focusSpecies: true
  })
}

//BLPW loop
for(let i=1; i<=4; ++i){
  CardList.push({
    id: crypto.randomUUID(),
    title: `BLPW ${i}`,
    audioUrl: `./clips_vce/BLPW_0${i}.mp3`,
    answerCode: "BLPW",
    answerName: "Blackpoll Warbler",
    focusSpecies: true
  })
}

//BOCH loop
for(let i=1; i<=2; ++i){
  CardList.push({
    id: crypto.randomUUID(),
    title: `BOCH ${i}`,
    audioUrl: `./clips_vce/BOCH_0${i}.mp3`,
    answerCode: "BOCH",
    answerName: "Boreal Chickadee",
    focusSpecies: true
  })
}

//CMWA loop
for(let i=1; i<=1; ++i){
  CardList.push({
    id: crypto.randomUUID(),
    title: `CMWA ${i}`,
    audioUrl: `./clips_vce/CMWA_0${i}.mp3`,
    answerCode: "CMWA",
    answerName: "Cape May Warbler",
    focusSpecies: false
  })
}

//DEJU loop
for(let i=1; i<=2; ++i){
  CardList.push({
    id: crypto.randomUUID(),
    title: `DEJU ${i}`,
    audioUrl: `./clips_vce/DEJU_0${i}.mp3`,
    answerCode: "DEJU",
    answerName: "Dark-eyed Junco",
    focusSpecies: false
  })
}

//FOSP loop
for(let i=1; i<=2; ++i){
  CardList.push({
    id: crypto.randomUUID(),
    title: `FOSP ${i}`,
    audioUrl: `./clips_vce/FOSP_0${i}.mp3`,
    answerCode: "FOSP",
    answerName: "Fox Sparrow",
    focusSpecies: true
  })
}

//HETH loop
for(let i=1; i<=5; ++i){
  CardList.push({
    id: crypto.randomUUID(),
    title: `HETH ${i}`,
    audioUrl: `./clips_vce/HETH_0${i}.mp3`,
    answerCode: "HETH",
    answerName: "Hermit Thrush",
    focusSpecies: true
  })
}

//LEFL loop
for(let i=1; i<=1; ++i){
  CardList.push({
    id: crypto.randomUUID(),
    title: `LEFL ${i}`,
    audioUrl: `./clips_vce/LEFL_0${i}.mp3`,
    answerCode: "LEFL",
    answerName: "Least Flycatcher",
    focusSpecies: false
  })
}

//LISP loop
for(let i=1; i<=1; ++i){
  CardList.push({
    id: crypto.randomUUID(),
    title: `LISP ${i}`,
    audioUrl: `./clips_vce/LISP_0${i}.mp3`,
    answerCode: "LISP",
    answerName: "Lincoln's Sparrow",
    focusSpecies: false
  })
}

//RCKI loop
for(let i=1; i<=1; ++i){
  CardList.push({
    id: crypto.randomUUID(),
    title: `RCKI ${i}`,
    audioUrl: `./clips_vce/RCKI_0${i}.mp3`,
    answerCode: "RCKI",
    answerName: "Ruby-crowned Kinglet",
    focusSpecies: false
  })
}

//RESQ loop
for(let i=1; i<=3; ++i){
  CardList.push({
    id: crypto.randomUUID(),
    title: `RESQ ${i}`,
    audioUrl: `./clips_vce/RESQ_0${i}.mp3`,
    answerCode: "RESQ",
    answerName: "Red Squirrel",
    focusSpecies: true
  })
}

//SWTH loop
for(let i=1; i<=3; ++i){
  CardList.push({
    id: crypto.randomUUID(),
    title: `SWTH ${i}`,
    audioUrl: `./clips_vce/SWTH_0${i}.mp3`,
    answerCode: "SWTH",
    answerName: "Swainson's Thrush",
    focusSpecies: true
  })
}

//VEER loop
for(let i=1; i<=4; ++i){
  CardList.push({
    id: crypto.randomUUID(),
    title: `VEER ${i}`,
    audioUrl: `./clips_vce/VEER_0${i}.mp3`,
    answerCode: "VEER",
    answerName: "Veery",
    focusSpecies: false
  })
}

//WIWR loop
for(let i=1; i<=4; ++i){
  CardList.push({
    id: crypto.randomUUID(),
    title: `WIWR ${i}`,
    audioUrl: `./clips_vce/WIWR_0${i}.mp3`,
    answerCode: "WIWR",
    answerName: "Winter Wren",
    focusSpecies: true
  })
}

//WTSP loop
for(let i=1; i<=2; ++i){
  CardList.push({
    id: crypto.randomUUID(),
    title: `WTSP ${i}`,
    audioUrl: `./clips_vce/WTSP_0${i}.mp3`,
    answerCode: "WTSP",
    answerName: "White-throated Sparrow",
    focusSpecies: true
  })
}

//YBFL loop
for(let i=1; i<=2; ++i){
  CardList.push({
    id: crypto.randomUUID(),
    title: `YBFL ${i}`,
    audioUrl: `./clips_vce/YBFL_0${i}.mp3`,
    answerCode: "YBFL",
    answerName: "Yellow-bellied Flycatcher",
    focusSpecies: true
  })
}



export const BirdChoices = [
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