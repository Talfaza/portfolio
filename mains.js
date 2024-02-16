var oldInputId = "terminal";
var oldOutputId = "output";
document.getElementById("terminal").focus();

function newLine() {

    var inputLineContainer = document.createElement("div");
    inputLineContainer.classList.add("input-line");

    var label = document.createElement("label");
    label.setAttribute("for", oldInputId); 
    label.textContent = "guest@talfaza:~$";

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
  var output = "<div><span class='output-element'>" + whoami + "</span></div>"; // Add output container and text
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
          default:
            CommandError(oldOutputId);
              break;
      }
  }
});

