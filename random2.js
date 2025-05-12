const lines = [
    "being vulnerable is a little scary",
    "what makes good poetry good and bad poetry bad",
    "do you ever wonder why people have favorite colors?",
    "i went on a car ride with my dad the other day and i asked him what his favorite song was,",
    "i didn't get enough sleep again",
    "i look like my mom when she was younger, does that mean anything",
    "what's your favorite color?",
    "i like it when children always ask 'why' i think we should do that more",
    "who wants to read poetry, anyway?",
    "oh no the birds are chirping",
    "i wish i was a bird",
    "i wonder who made the first poem",
    "poetry in other languages are so beautiful but i wish i could understand them",
    "all the things lost in translation",
    "i'm really hungry these days",
    "if you could travel back in time, when would you go to",
    "my favorite colors are shades of sunsets. and blue",
    "i like icebreakers (i want to know things about all of you)",
    "i want to go to bed yesterday more often",
    "orpheus looked back out of love",
    "i don't like sad endings",
    "i hate cliffhangers",
    "i need to watch more movies and read more books",
    "what are my top five favorite smells... i think laundry is one",
    "what is the point of cliffhangers!! seriously",
    "a new day, a new horror, but still a new day",
    "isn't it weird how tomorrows will always come",
    "DO YOU REMEMBER BEING YOUNG AND FREE",
    "i miss being small",
    "there is a tiny creature in your brain at all times",
    "THERE IS POETRY IN EVERYTHING",
    "THERE IS POETRY IN THE WAY YOU DO THE DISHES",
    "i think happiness is easy to find (but i know it's easy to forget)",
    "i am still young and free",
    "let us keep our childhood whimsy, nurture the parts of us that ask 'why'",
    "there is a comfort in not knowing everything",
    "I WANT TO KNOW",
    "THERE IS POETRY IN YOUR LAUGH",
    "art will always exist everywhere",
    "read quickly!!!!! or not, that's okay",
    "i wholeheartedly believe that if i drink enough hot water i won't get sick",
    "did food taste better as a kid? why is that",
    "i love making new playlists",
];

let intervalId;
let isRunning = true;

function getRandomPosition() {
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 50);
    return { x, y };
}

function typeText(text, element) {
    let i = 0;
    function addLetter() {
        if (i < text.length) {
            element.textContent += text[i];
            i++;
            setTimeout(addLetter, 100);
        }
    }
    addLetter();
}

function createTextElement() {
    if (!isRunning) return;
    
    const text = lines[Math.floor(Math.random() * lines.length)];
    const { x, y } = getRandomPosition();
    
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;
    div.style.background = "black";
    div.style.color = "white";
    div.style.padding = "5px";
    div.style.fontFamily = "Arial, sans-serif";
    div.style.whiteSpace = "nowrap";
    div.style.fontSize = "16px";
    div.style.opacity = "0";
    div.style.transition = "opacity 0.5s ease-in-out";
    
    document.body.appendChild(div);
    setTimeout(() => { div.style.opacity = "1"; }, 100);
    
    typeText(text, div);

    setTimeout(() => { 
        div.style.opacity = "0"; 
        setTimeout(() => div.remove(), 700);
    }, 13000);
}

function startTextGeneration() {
    if (!intervalId) {
        intervalId = setInterval(createTextElement, 2000);
        isRunning = true;
    }
}

function stopTextGeneration() {
    clearInterval(intervalId);
    intervalId = null;
    isRunning = false;
}

document.getElementById("generate-words").addEventListener("click", startTextGeneration);
document.getElementById("erase-canvas").addEventListener("click", stopTextGeneration);

startTextGeneration();
