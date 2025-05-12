// Array of words to be displayed in the buttons
const words = [
    "golden", "heart", "bleed", "reach", "me", "love", "peace", "light", "fire", "dream", 
    "hope", "joy", "flame", "wind", "river", "moon", "star", "wind", "sky", "soul", "truth",
    "ing", "me", "ing", "s", "ed", "ed", "ing", "you", "me", "i", "i", "and", "with", "am",
    "grab", "and", "a", "an", "they", "are", "she", "he", "is", "run", "walk", "swim", "drown",
    "breathe", "breath", "whisper", "are", "she", "they", "he", "is", "are", "you", "us",
    "let", "go", "turn", "away", "hide", "appear", "fake", "real", "realize", "enough",
    "one", "two", "three", "infinite", "gravity", "blood", "pain", "bleak", "night", "day",
    "sleep", "asleep", "rest", "they", "mother", "father", "sibling", "twin", "color",
    "s", "s", "ing", "ing", "s", "ing", "the", "the", "with", "with", "without", "out",
    "out", "around", "under", "above", "love", "love", "flame", "and", "and", "and", "and",
    "infinite", "golden", "heart", "reach", "fire", "nightmare", "ugly", "raw", "tender", "bitter",
    "sweet", "broken", "black", "crimson", "watercolor", "painting", "alive", "dead", "young",
    "born", "reborn", "ed", "ing", "'s", "'s", "ing", "you", "me", "you", "us", "us", "us",
    "again", "once", "today", "yesterday", "tomorrow", "future", "past", "black", "blue", "silver",
    "run", "again", "with", "the", "past", "for", "for", "hand", "hand", "finger", "mouth", 
    "sing", "ring", "pull", "push", "the", "the", "for", "run", "more", "less"
];

// necessary elements
const generateButton = document.getElementById('generate-words');
const eraseButton = document.getElementById('erase-canvas');  // Select the erase button

const buttonWidth = 150; // Set a fixed width for the buttons
const buttonHeight = 40; // Set a fixed height for the buttons

// function for generating a random word grid
function generateWordButtons() {
    const randomWords = shuffle(words).slice(0, 40);
    
    randomWords.forEach((word, index) => {
        const button = document.createElement('button');
        button.classList.add('grid-button');
        button.textContent = word;
        button.draggable = true;
        button.id = `btn${index + 1}`; // id for each button
        
        // to make sure all words stay within the canvas frame 
        const maxX = window.innerWidth - buttonWidth;
        const maxY = window.innerHeight - buttonHeight;
        
        button.style.position = 'absolute'; 
        button.style.top = `${Math.random() * maxY}px`;
        button.style.left = `${Math.random() * maxX}px`;
        
        // Store the initial position before dragging
        let offsetX = 0, offsetY = 0;
        
        // Add dragstart event listener to store initial mouse position
        button.addEventListener('dragstart', (e) => {
            offsetX = e.clientX - button.offsetLeft;
            offsetY = e.clientY - button.offsetTop;
        });

        // Handle dragging to update the button's position in real-time
        button.addEventListener('drag', (e) => {
            if (e.clientX === 0 && e.clientY === 0) return;  // Avoid empty drag events
            
            // Update button's position, ensuring it stays within the viewport
            const newX = e.clientX - offsetX;
            const newY = e.clientY - offsetY;

            // Ensure button doesn't go outside the browser window
            button.style.left = `${Math.max(0, Math.min(window.innerWidth - buttonWidth, newX))}px`;
            button.style.top = `${Math.max(0, Math.min(window.innerHeight - buttonHeight, newY))}px`;
        });

        // Add dragend event listener to finalize the position
        button.addEventListener('dragend', (e) => {
            const dropX = e.clientX - offsetX;
            const dropY = e.clientY - offsetY;

            // Finalize the position without any delay, ensuring it's within the bounds
            button.style.left = `${Math.max(0, Math.min(window.innerWidth - buttonWidth, dropX))}px`;
            button.style.top = `${Math.max(0, Math.min(window.innerHeight - buttonHeight, dropY))}px`;
        }); 
        
        // Append the button to the document body
        document.body.appendChild(button);
    });
}

// my lil shuffle array 
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// event listener for generating words
generateButton.addEventListener('click', generateWordButtons);

// event listener for erase canvas
eraseButton.addEventListener('click', () => {
    // Select all the word buttons and remove them from the DOM
    const buttons = document.querySelectorAll('.grid-button');
    buttons.forEach(button => button.remove()); // Removes all the buttons
});

// drag-and-drop functionality (for anywhere on the page)
document.body.addEventListener('dragover', (e) => {
    e.preventDefault(); // Allow the drop
});



// Load the audio state from localStorage
      const audioState = localStorage.getItem('audioState');
      if (audioState === 'playing') {
        audioPlayer.play();
      } else if (audioState === 'paused') {
        audioPlayer.pause();
      }

      audioContainer.appendChild(audioPlayer);

      // Save the state when the audio is played or paused
      audioPlayer.addEventListener('play', () => {
        localStorage.setItem('audioState', 'playing');
      });

      audioPlayer.addEventListener('pause', () => {
        localStorage.setItem('audioState', 'paused');
      });


  //  const d = new Date();
   // let time = d.getTime();

        // Calculate milliseconds in a year
  //  const minute = 1000 * 60;
  //  const hour = minute * 60;
   // const day = hour * 24;
   // const year = day * 365;

        // Divide Time with a year
   // const d = new Date();
  //  let years = Math.round(d.getTime() / year);
