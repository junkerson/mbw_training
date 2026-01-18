# Mountain Birdwatch Training App

This is a simple, standalone, one-page browser app that is essentially an audio flashcard tool designed to help with training for the Mountain Birdwatch Project.

Mountain Birdwatch is a citizen scientist project where volunteers journey to mountain tops around the northeastern United States every June and count how many birds of the focus species they can hear or see.
This app aims to help train the volunteers' ears to recognize the calls of the desired birds, as well as identify a few that sound similar but are not part of the study.

Additional information about the project, and the Vermont Center for Ecostudies which runs it, can be found here: https://vtecostudies.org/projects/mountains/mountain-birdwatch/


## Installation
The app is a simple html/javascript program that should run in any modern web browser.
No internet connectivity is required.

To "install", do the following:
1. Go to https://github.com/junkerson/mbw_training
2. Look for the "<> Code" button and click on it then select Downoad ZIP
3. Save the ZIP to your computer
4. Unzip the contents of the ZIP file to a convenient location
5. Open the "index.html" file in root folder in a modern browser
6. The application should come up ready to use


## Usage
I strived to keep usage of the app fairly intuitive.

The playback controls, buttons for guessing, and options are in the left pane. Statistics and the card Queue and in the right pane. There are also some tips in various spots that may be helpful.

#### Playback and Guessing
1. Click the Play button in the media controls at the top of the left pane to hear the vocalization clip.
2. Click one of the bird buttons under the playback controls to make your guess. Feedback will be displayed indicating if you are correct or incorrect. The session statistics will also update, as will as a colored indication on the current queue card.
3. Click the "Next" button to go to the next bird. If Autoplay option is checked (it is by default), the next audio clip will play and you can again make your guess and get feedback. othersies click the play btton to hear the clip.
4. Repeat and make your way through the training clips.

You can also click onto a card in the Queue to load that specific item. This can be helpful once you've gone through all the cards and would like to focus on specific clips, such as the ones you guessed incorrectly.



#### Options
The options are hopefully fairly self explanatory. Don't be afraid to click on them all and see what happens. Some will reset stats, so make note of anything you want to before experimenting.

The "Show Bird Names" and "Show 4-Character Codes" radio buttons switch what the labels on the guess buttons read. It defaults to Show Bird Names

The "Focus Birds Only", "Non-Focus Birds Only", "Focus and Non-Focus Birds" radio buttons determine the selection of birds that will be used for the queue cards. It defaults to Focus Birds Only.
Note that switching to a new population option will reset queue and any correct/incorrect indicators. It will not reset the statistics.

The "Autoplay audio when new sample loads" checkbox determines if the clip plays autmatically when moving to a new card, or if you have to click the play button each time. It default to Autoplay

The "Selection Mode" checkbox updates the labels on the queue card to show the 4-Character Codes and the clip number. This is helpful if you need to do some additional familiarization with specific birds

You can also reset the queue by pressing the "Reset and Shuffle" button.

You can completely reset the session and all statistics with the "Restart Session" button.



#### Key Shortcuts
Note: these shortcuts will not work if one of the option items has the focus. Click on a blank area of the page to take the focus off the options if the shortcuts don't seem to be working.

1. Space bar - Play/pause the current audio clip
2. Left Arrow or the A key - Move to the Previous card
3. Right Arrow or the D key - Move to the Next cards



## Troubleshooting
This app works fine on my computers, but I have done next to no testing on other systems.
Since this is written in basic HTML, CSS, and vanilla Javascript, this should run fine on any modern browser, but results may vary.

A few things of note:
1. Sometimes, especially when playing the first audio clip after loading the app, it takes several seconds to start playing the audio. Usually, any subsequent clips play fine without delay. I'll troubleshoot at some point to see if I can improve the performance, but at the moment I just consider it a minor incovenience.
2. The key shortcuts do not work if you've clicked on one of the option items and it still has focus. Click on a blank part of the screen and the key shortcuts should start working again. I'll see if I can figure out a way to get around that issue.
3. This does not save any statistics between sessions. Once you reload the page or close the browser (or hit the Restart Session button) any stats and indicators will be lost. Using this myself, I haven't seen any real need to persist data across sessions, but I might look into it at some point.
4. Yes, there's quite a bit of red and green indicators used, apologies to anyone who have trouble difereantiating those colors. It hopefully does not limit usability too much.


## Permissions and Copyright
Bird and squirrel vocalizations generously provided by the Macaulay Library at the Cornell Lab of Ornithology.

The actual audio clips were sourced from Vermont Center for Ecostudies' Mountain Birdwatch training materials.

All other non-copyrighted aspects of this page are CC BY-SA
