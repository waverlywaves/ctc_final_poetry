// Define the API key and endpoint

// Define the request payload

const generatePoemButton = document.querySelector('.generatePoemButton');
// Define the request headers
const headers = {
  'Content-Type': 'application/json',
};

function setup() {
  createCanvas(600, 400);
  noLoop();
  fetchPoem();
}

function fetchPoem() {
  fetch("https://poetrydb.org/random")
    .then(response => response.json())
    .then(data => {
      let poem = data[0].lines.join("\n"); 
      displayPoem(poem);
    })
    .catch(error => console.error("Error fetching poem:", error));
}

function displayPoem(poem) {
  poetryContainer.innerHTML = ""; // Clear previous poem
  let rectX = 50;
  let rectY = 50;
  let rectWidth = 500;
  let rectHeight = 300;

  fill(200);
  rect(rectX, rectY, rectWidth, rectHeight);
  
  let textX = rectX + 10;
  let textY = rectY + 20;
  let textWidth = rectWidth - 20;

    let div = createDiv(poem);
    div.class("poem-text");
    div.style("color", "white !important");
    console.log(div.style("color")); 
    div.style("position", "absolute");
    div.style("left", textX + "px");
    div.style("top", textY + "px");
    div.style("width", textWidth + "px");
    div.style("height", (rectHeight - 40) + "px");
    div.style("overflow-y", "scroll");
    div.style("background", "lightgray");
    div.style("padding", "10px");
}


// Make the API request using fetch
async function getMessage() {
  try {
    const response = await fetch('https://wavesofpoetry.netlify.app/.netlify/functions/api', {
      method: 'GET',
      headers: headers
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('API response:', data); // Log to see the response structure
    return data; // Return the data so the caller can access it
  } catch (error) {
    console.error('Error:', error);
    throw error; // Rethrow the error so the calling code can handle it
  }
}

const messages = document.querySelector('.aiContainer');

generatePoemButton.addEventListener('click', async () => {
  try {
    // Wait for the message to be fetched first
    const msg = await getMessage();

    // Create a new <p> element only after the message is resolved
    const p = document.createElement('p');
    p.innerText = msg.choices[0].message.content;

    // Clear the container before adding the new poem
    messages.innerHTML = ""; // This will remove the old poem

    // Append the new <p> element to the messages container
    messages.appendChild(p);
  } catch (error) {
    console.error('Error:', error);
  }

document.getElementById("generate-poetry").addEventListener("click", async function() {
  console.log("Button clicked!");

  const poetryOutput = document.getElementById("poetry-output");
  const loadingText = document.getElementById("loading-text");

  // Show loading message
  loadingText.style.display = "block";
  poetryOutput.textContent = "";

  try {
      console.log("Fetching poetry...");
      const poem = await fetchPoetry();
      console.log("Poetry:", poem);

      poetryOutput.textContent = poem;
  } catch (error) {
      console.error("Error fetching poetry:", error);
      poetryOutput.textContent = "Failed to load poetry.";
  } finally {
      // Hide loading message once done
      loadingText.style.display = "none";
      console.log("Loading text hidden.");
    }
});

const lines = [
  "The stars whisper secrets of the universe.",
  "Shadows dance in the moonlight.",
  "A fleeting moment, forever etched in time.",
  "Silence speaks louder than words.",
  "Dreams weave reality into the unknown."
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



// async function fetchPoetry() {
  // return new Promise((resolve) => {
    //  setTimeout(() => {
     //     resolve("generating poem...");
    //  }, 1000);
  //});
//}


});


