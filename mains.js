<<<<<<< HEAD
const asciiArt = [
      "     '-.",
      "        '-. _____    ",
      " .-._      |     '.  ",
      ":  ..      |      :  ",
      "'-._+      |    .-' ",
      " /  \\     .'i--i     ",
      "/    \\ .-'_/____\\___ ",
      "    .-'  :       "
  ];

const asciiArtElement = document.getElementById("ascii-art");

function displayAsciiArtLineByLine(index) {
    if (index < asciiArt.length) {
        asciiArtElement.textContent += asciiArt[index] + "\n";
        setTimeout(() => {
            displayAsciiArtLineByLine(index + 1);
        }, 100);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    displayAsciiArtLineByLine(0);
});
=======
document.addEventListener("DOMContentLoaded", function() {
      const lines = document.querySelectorAll('.line');
      let index = 0;
      
      function displayLine() {
        if (index < lines.length) {
          lines[index].style.display = 'block';
          index++;
          setTimeout(displayLine, 500); // Adjust the delay (in milliseconds) between each line
        } else {
          // All lines are printed, display the input and button
          const inputContainer = document.getElementById('inputContainer');
          inputContainer.style.display = 'block';
        }
      }
      
      displayLine();
    });
    
    document.addEventListener("DOMContentLoaded", function() {
      const outputContainer = document.getElementById('outputContainer');
      const textInput = document.getElementById('textInput');
      
      function displayMessage() {
        const inputText = textInput.value;
        const test = ["<br>", "Hello", "World"];
        
        // Clear previous content
        outputContainer.innerHTML = '';
    
        // Check if input matches "hello" (case insensitive)
        if (inputText.toLowerCase() === "hello") {
          // Display the content of the test array line by line with a timeout
          let index = 0;
          function displayLine() {
            if (index < test.length) {
              const itemElement = document.createElement('div');
              itemElement.innerHTML = test[index];
              outputContainer.appendChild(itemElement);
              index++;
              setTimeout(displayLine, 500); // Adjust the delay (in milliseconds) between each line
            }
          }
          displayLine();
        } else {
          // Display a message if input doesn't match "hello"
          const errorMessage = document.createElement('div');
          errorMessage.textContent = "Input does not match 'hello'";
          outputContainer.appendChild(errorMessage);
        }
      }
    
    
      textInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
          displayMessage();
        }
      });
    });
    
>>>>>>> parent of f81e7cd (minor fixes)
