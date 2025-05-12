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
];

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

    // Remove after some time to prevent overcrowding
   // setTimeout(() => { 
   //    div.style.opacity = "0"; 
    //    setTimeout(() => div.remove(), 500);
    //}, 8000);
}

// Generate text every 2 seconds
setInterval(createTextElement, 2000);
