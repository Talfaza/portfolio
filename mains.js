document.addEventListener("DOMContentLoaded", function() {
      const lines = document.querySelectorAll('.line');
      let index = 0;
      
      function displayLine() {
        if (index < lines.length) {
          lines[index].style.display = 'block';
          index++;
          setTimeout(displayLine, 500); 
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
        
        outputContainer.innerHTML = '';
    
        if (inputText.toLowerCase() === "hello") {
          // Display the content of the test array line by line with a timeout
          let index = 0;
          function displayLine() {
            if (index < test.length) {
              const itemElement = document.createElement('div');
              itemElement.innerHTML = test[index];
              outputContainer.appendChild(itemElement);
              index++;
              setTimeout(displayLine, 500); // ms
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
    