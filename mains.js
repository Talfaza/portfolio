var oldInputId = "terminal";
var oldOutputId = "output";
document.getElementById("terminal").focus();

function newLine() {
    var inputLineContainer = document.createElement("div");
    inputLineContainer.classList.add("input-line");

    var label = document.createElement("label");
    label.setAttribute("for", oldInputId);
    label.textContent = "guest@talfaza";

    var symbol = document.createElement("span");
    symbol.textContent = ":~$";
    symbol.classList.add("label-symbol");
    label.appendChild(symbol);

    var newInputId = oldInputId;
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", newInputId);
 
    inputLineContainer.appendChild(label);
    inputLineContainer.appendChild(input);

    document.body.appendChild(inputLineContainer);

    var newOutputId = "output" + Math.floor(Math.random() * 1000); 
    var outputDiv = document.createElement("div");
    outputDiv.setAttribute("id", newOutputId);

    document.body.appendChild(outputDiv);

    document.getElementById(oldInputId).disabled = true;

    input.focus();

    oldInputId = newInputId;
    oldOutputId = newOutputId;

    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            var inputText = input.value.trim();
            switch (inputText) {
                case "help":
                    help(newOutputId);
                    break;
                case "whoami":
                    whoami(newOutputId);
                    break;
                case "socials":
                    socials(newOutputId);
                    break;
                case "whois":
                    whois(newOutputId);
                    break;
                default:
                    CommandError(newOutputId);
                    break;
            }
        }
    });
}


function help(outputId) {
  var helpItems = ["whoami", "whois", "socials", "projects", "help"];
  var output = "<div>"; 
  for (var i = 0; i < helpItems.length; i++) {
      output += "<span class='output-element'>" + helpItems[i] + "</span><br>";
  }
  output += "</div>"; 
  document.getElementById(outputId).innerHTML = output;
  newLine();
}




function whoami(outputId) {
  var whoami = "guest"; 
  var output = "<div><span class='output-element'>" + whoami + "</span></div>"; 
  document.getElementById(outputId).innerHTML += output;
  newLine();
}

function socials(outputId) {
  var socials = {
      "LinkedIn": "https://www.linkedin.com/",
      "GitHub": "https://github.com/Talfaza"
  };
  var output = "<div>";
  for (var website in socials) {
      if (socials.hasOwnProperty(website)) {
          output += "<span class='output-element'><span>" + website + "</span> : <a class='output-link' href='" + socials[website] + "' target='_blank'>" + socials[website] + "</a></span><br>";
      }
  }
  output += "</div>";
  document.getElementById(outputId).innerHTML += output;
  newLine();
}

function whois(outputId) {
    var whoisText = "Hey everyone! 👋 I'm Talfaza, a third year Computer Science student with a love for all things related to technology. I've got a soft spot for Linux and the FOSS world it's like my tech playground where I love to experiment and explore. 💻 Whether it's delving into coding challenges or embracing the latest tech trends, I thrive on the excitement of learning and pushing the boundaries of what's possible. Let's dive into the endless possibilities together! 🚀";
    var words = whoisText.split(" ");
    var i = 0;
    var span = document.createElement("span");
    span.classList.add("output-element"); 

    var intervalId = setInterval(function() {
        if (i < words.length) {
            span.textContent += words[i] + " "; 
            document.getElementById(outputId).appendChild(span); 
            i++;
        } else {
            clearInterval(intervalId);
            newLine(); 
        }
    }, 100); 
}


function CommandError(outputId){
  var output = "<div><span class='output-element'>Command not found. For a list of commands, type 'help'.</span></div>"; // Add output container and text
  document.getElementById(outputId).innerHTML += output;
  newLine();
}
//for the default input
document.getElementById("terminal").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      var input = document.getElementById("terminal").value.trim();
      switch (input) {
          case "help":
              help(oldOutputId);
              break;
          case "whoami":
              whoami(oldOutputId);
              break;
          case "socials":
              socials(oldOutputId);
              break;
          case "whois":
                whois(oldOutputId);
                break;
          default:
            CommandError(oldOutputId);
              break;
      }
  }
});

