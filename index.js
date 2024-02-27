
// Initialize story
let story = ''; 
function addToStory(imageName) {
  // Add snippet corresponding to the clicked image to the story
  switch(imageName) {
    case 'image1':
        story += '\nOnce upon a time, in a land where broccoli ruled the kingdom and socks had magical powers, there lived a clumsy panda named Pancake. The kingdom was a whimsical place where vegetables wore crowns and socks granted wishes.';
        break;
    case 'image2':
        story += '\nPancake was notorious for his love of dancing in puddles of peanut butter and his uncanny ability to accidentally break things with his fluffy tail. Despite his clumsiness, he was loved by all for his kind heart and infectious laughter.';
        break;
    case 'image3':
        story += '\nOne day, while frolicking in the broccoli fields, Pancake stumbled upon a jar of peanut butter, setting off a chain of events that would lead him on an unexpected adventure.';
        break;
    case 'image4':
        story += '\nHidden inside the jar was a magical sock, shimmering with ethereal light. Sensing its power, Pancake knew he had to embark on a journey to discover the secrets it held.';
        break;
    case 'image5':
        story += '\nWith the magical sock tucked safely in his paw, Pancake ventured forth into the broccoli forest, following a winding path that led deep into the heart of the kingdom.';
        break;
    case 'image6':
        story += '\nAlong the way, Pancake encountered a mischievous broccoli sprite who tried to thwart his progress with tricks and traps, testing his resolve and determination.';
        break;
    case 'image7':
        story += '\nUndeterred, Pancake used his signature goofy dance moves to charm the sprite, turning its mischief into merriment and earning its aid on his quest.';
        break;
    case 'image8':
        story += '\nTogether with the sprite, Pancake uncovered a hidden sanctuary where magical socks of all shapes and sizes were kept, each possessing unique abilities waiting to be unleashed. Armed with newfound friends and the power of magical socks, Pancake returned home to the broccoli kingdom, his heart brimming with joy and his spirit enriched by the adventures that awaited him.';
        break;
  }
  // Update story display
  updateStoryDisplay(); 
}

function updateStoryDisplay() {
  // Display the current story in the story display element
  document.getElementById('story-display').innerText = story;
}

// Create a button element for showing instructions
const showInstructionsButton = document.createElement('button');
showInstructionsButton.id = 'showInstructionsButton'; // Assign an ID for styling
showInstructionsButton.textContent = 'Show/Hide Instructions';

// Append the button to the body or any desired element
document.body.appendChild(showInstructionsButton);

// Add event listener to the button to toggle instructions visibility
showInstructionsButton.addEventListener('click', function() {
    var instructions = document.querySelector('.instructions');
    if (instructions.style.display === 'none') {
        instructions.style.display = 'block'; // Show instructions
    } else {
        instructions.style.display = 'none'; // Hide instructions
    }
});

// Create a button element for starting over
const replayButton = document.createElement('button');
replayButton.id = 'replayButton'; // Assign an ID for styling
replayButton.textContent = 'Start Over';

// Append the button to the body or any desired element
document.body.appendChild(replayButton);

// Add event listener to the replay button
replayButton.addEventListener('click', function() {
    location.reload(); // Reload the browser when the button is clicked
});
